import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";


describe('Pruebas en <DashboardRoutes />', () => {
    
    const contextValue = {
        user: {
            logged: true,
            name: 'Ragnar'
        }
    }

    test('debe de mostrarse correctamente - Marvel', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']} >
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.user').text().trim() ).toBe('Ragnar');
        expect(wrapper.find('h1').text().trim() ).toBe('MARVEL HEROES');
    })
    
    test('debe de mostrarse correctamente - DC', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']} >
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim() ).toBe('DC HEROES');
    })
    
})

