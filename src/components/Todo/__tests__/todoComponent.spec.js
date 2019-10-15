import * as React from 'react';
import todoComponent from '../Todo';
import renderer from 'react-test-renderer';
const onClick = jest.fn();
it('should render todoComponent', () => {
  const component = renderer.create(
    <todoComponent
      todo={{id: 1,completed: false, text:'text'}}
      onClick={onClick}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
