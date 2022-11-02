import { ThemeProvider } from 'styled-components';
import { useFonts, NovaSquare_400Regular } from '@expo-google-fonts/nova-square';
import { THEME } from './src/theme';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {

	const [fontsLoaded] = useFonts({ NovaSquare_400Regular });

	return (
		<ThemeProvider theme={THEME}>
			<StatusBar 
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			{ fontsLoaded ? <Routes /> : <Loading /> }
		</ThemeProvider>
	);
}