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

// consertar o erro de 'only numbers'

// cards vao ocupar a grid da parte colorida e serão jogadas pro lado pra comportar o layout



export default App;
