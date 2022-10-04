//RNBC
import { Image, View } from 'react-native';

import { LogoImg } from '../../assets/Logo.png';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/Logo.png')}
            // source={LogoImg}
            style={styles.logo}
        />
    </View>
  );
}