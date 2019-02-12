import React from 'react';
import renderer from "react-test-renderer";
import App from '../../../components/App';
import Counter from '../../../components/counter';
import Incrementer from '../../../components/incrementer';
import Decrementer from '../../../components/decrementer';
import MyContext from '../../../components/context/context';



describe('Counter component', () => {
    it('lives', () => {
        expect(true).toBeTruthy();
      });

    it('exists', () => {
        let wrapper = shallow(<Counter />)
        expect(wrapper.find('h1')).toBeTruthy();
    });
});

describe('Incrementer component', () => {
    it('exists', () => {
        let wrapper = shallow(<Incrementer />)
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('changes state on click', () => {
        let component = mount(<MyContext><Incrementer /></MyContext>);
        let clicker = component.find("#up");
        clicker.simulate("click");
        let newState = component.state();
        expect(newState.count).toEqual(1);
    });
});

describe('Decrementer component', () => {
    it('exists', () => {
        let wrapper = shallow(<Decrementer/>)
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('changes state on click', () => {
        let component = mount(<MyContext><Decrementer /></MyContext>);
        let clicker = component.find("#down");
        clicker.simulate("click");
        let newState = component.state();
        expect(newState.count).toEqual(-1);
    });
});

describe('App component', () => {
    it('exists', () => {
        let wrapper = shallow(<App/>)
        expect(wrapper.find(Counter)).toBeTruthy();
        expect(wrapper.find(Incrementer)).toBeTruthy();
        expect(wrapper.find(Decrementer)).toBeTruthy();
    });
});

