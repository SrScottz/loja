import React from 'react'
import { Table, Modal, Button } from 'antd';
import axios from 'axios';
import { ActionsTable, Actions, Header } from './style';
const { confirm } = Modal;
export default function Products() {
    const [data, setData] = React.useState([])
    const [loader, setLoader] = React.useState([])
    const [text, setText] = React.useState('');
    const handleChange = event => {
        setText(event.target.value);
    };
    const results = !text
        ? data?.Produtos
        : data?.Produtos.filter(
            p => p?.nome.toLowerCase().includes(text.toLocaleLowerCase())
        );
    React.useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            axios.get('https://lojavirtual123.herokuapp.com/produto/')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                setLoader(false);
            });
        });
    }, [])
    const showDeleteConfirm = (e) => {
        confirm({
          title: 'Tem certeza que deseja excluir este produto?',
          okText: 'Sim',
          okType: 'danger',
          cancelText: 'Não',
          onOk() {
            deleteItem(e);
          },
          onCancel() {
            // 
          },
        });
    }
    const deleteItem = (id) => {
        axios.delete(`https://lojavirtual123.herokuapp.com/produto/${id}`)
            .then(function (response) {
                return;
            })
            .catch(function(err) {
                console.log(err);
            }).then(function () {
                //Teste
            });
        
    }
    const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
        },
        {
          title: 'Valor',
          dataIndex: 'valor',
          key: 'valor',
          render: text => `R$${text}`
        },
        {
            title: 'Ações',
            render: (e, item) => (
                <>
                    <ActionsTable>
                        <span onClick={() => showDeleteConfirm(e.idproduto)}>Excluir</span>
                        <span>Editar</span>
                    </ActionsTable>
                </>
            )
        }
        
    ];
    return (
        <Header>
            <Actions>
                <Button type="primary">Adicionar</Button>
                <input 
                    placeholder="Pesquisar produto"
                    onChange={handleChange}
                    value={text} 
                />
            </Actions>
            <Table 
                dataSource={results}
                columns={columns}
                loading={loader} 
                size="middle" 
            />
        </Header>
    )
}
