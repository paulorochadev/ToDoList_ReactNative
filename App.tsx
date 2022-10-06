import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#0d0d0d'
        translucent={false}
      />
      
      <Home />
    </>
  );
}