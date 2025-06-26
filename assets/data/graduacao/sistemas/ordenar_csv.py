import csv


def ordenar_csv(
    arquivo_entrada,
    arquivo_saida,
    modo='ano',  # pode ser 'ano', 'semestre' ou 'anoSemestre'
    coluna_ano='Ano',
    coluna_semestre='Semestre',
    chave_x=None  # se quiser ordenar por outra coluna simples
):
    with open(arquivo_entrada, newline='', encoding='utf-8') as csvfile:
        leitor = list(csv.DictReader(csvfile))

        def chave(item):
            if modo == 'anoSemestre':
                # Aqui lidamos com o valor já concatenado como '2024.2'
                valor = str(item.get(coluna_ano, '0.0'))
                try:
                    ano_str, semestre_str = valor.split(".")
                    return (int(ano_str), int(semestre_str))
                except ValueError:
                    return (0, 0)
            elif modo == 'ano':
                return int(float(item.get(coluna_ano, 0)))
            elif modo == 'semestre':
                return int(item.get(coluna_semestre, 0))
            elif chave_x:
                return item.get(chave_x)
            else:
                return 0

        dados_ordenados = sorted(leitor, key=chave)

    with open(arquivo_saida, 'w', newline='', encoding='utf-8') as csvfile:
        campos = leitor[0].keys() if leitor else []
        escritor = csv.DictWriter(csvfile, fieldnames=campos)
        escritor.writeheader()
        escritor.writerows(dados_ordenados)

    print(f"Arquivo ordenado salvo em: {arquivo_saida}")


if __name__ == "__main__":
    ordenar_csv(
        arquivo_entrada="sc_ativos_historico.csv",
        arquivo_saida="dados_ordenados.csv",
        modo="anoSemestre"  # ou 'ano', 'semestre', 'outro'
    )
