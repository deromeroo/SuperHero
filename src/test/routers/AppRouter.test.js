import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en < AppRouter />', () => {

    test('debe de mostrar el login si no está autenticado', () => {
        
        const contexValue = {
            user:{
                logged:false
            }
        }
    
        const wrapper = mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h6').text().trim() ).toBe( 'Sign in' );

    })

    test('no debe de mostrar el componente marvel si esta autenticado', () => {

        const contexValue = {
            user:{
                logged: true,
                name: 'Anthony'
            }
        }
    
        const wrapper = mount(
            <AuthContext.Provider value={ contexValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists() ).toBe( true );

    })
    



})
