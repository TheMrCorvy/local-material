import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
            light: blue['A200'],
            dark: blue[900]
        }
    }
});

export default theme;
