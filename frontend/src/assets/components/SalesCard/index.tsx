



function SalesCard(){
    return(
        <div>
            <h2>
                Sales Card
            </h2>


            <div>
                <table>
                    <thead> {/*agrupa o conteúdo do cabeçalho de uma tabela HTML*/}
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Visitas</th>
                            <th>Vendas</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody> {/*Agrupa o cocnteúdo do corpo de uma tabela HTML*/}
                        <tr>
                            <td>#101010</td>
                            <td>18/01/2020</td>
                            <td>Teste1</td>
                            <td>10</td>
                            <td>9</td>
                            <td>R$1.0000,00</td>

                        </tr>
                        <tr>
                            <td>#11110</td>
                            <td>28/05/2020</td>
                            <td>Teste2</td>
                            <td>40</td>
                            <td>7</td>
                            <td>R$1.0000,00</td>

                        </tr>
                        <tr>
                            <td>#99999</td>
                            <td>17/07/2021</td>
                            <td>Teste3</td>
                            <td>100</td>
                            <td>15</td>
                            <td>R$19.0000,00</td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default SalesCard