//RNBC
import { Image, View } from 'react-native';

import { Logo } from '../../assets/Logo.png';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/Logo.png')}
            // source={Logo}
            style={styles.logo}
        />
    </View>
  );
}