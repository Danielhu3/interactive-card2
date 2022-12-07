import React from 'react';
import Aside from './components/aside';
import Main  from './components/main/';
import Form  from './components/main/form/';
import GlobalStyles from './styles/global';


function App() {
  const [form, setForm] = React.useState(
    {
      cardholderName:{
        value:'',
        error: ''
      },
      cardNumber:{
        value:'',
        error: ''
      },
      month:{
        value:'',
        error: ''
      },
      year:{
        value:'',
        error: ''
      },
      cvc:{
        value:'',
        error: ''
      },
    }
  )
  return (
    <div className="App">
      <GlobalStyles />
      <Aside form={form}/>

      <Main>
        <Form form={form} setForm={setForm} />
      </Main>

      
    </div>
  );
}

// cards vao ocupar a grid da parte colorida e serão jogadas pro lado pra comportar o layout

// os inputs de mes e ano vao ficar dentro de uma unica label
// a label contendo os inputs MM e YY e o cvc vao ocupar a mesma linha; a linha vai ser dividida em 2 colunas
// uma div vai comportar as 2 colunas

/* 
  div
    labelMMYY
      inputMM
      inputYY
    labelMMYY
    CVC
   div

*/

export default App;
