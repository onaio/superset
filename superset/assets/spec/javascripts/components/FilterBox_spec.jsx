import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilterBox from '../../../src/visualizations/FilterBox/FilterBox';

const defaultProps = {
  filtersChoices: {
    "country_name": [
      {
        id: "China",
        text: "China",
        metric: 474644
      },
      {
        id: "India",
        text: "India",
        metric: 737373
      },
      {
        id: "Brazil",
        text: "Brazil",
        metric: 664637
      },
      {
        id: "Nigeria",
        text: "Nigeria",
        metric: 764738
      }
    ],
    "region": [
      {
        id: "South Asia",
        text: "South Asia",
        metric: 4636536262,
      },
      {
        id: "Sub-Saharan Africa",
        text: "Sub-Saharan Africa",
        metric: 564637373736,
      },
      {
        id: "Latin America & Caribbean",
        text: "Latin America & Caribbean",
        metric: 1242265626,
      },
    ]
  },
  filtersFields: [
    {"asc":false,"clearable":true,"column":"region","key":"region","metric":"sum__SP_POP_TOTL","multiple":true,"label":"region"},
    {"asc":false,"clearable":true,"column":"country_name","key":"country_name","metric":"sum__SP_POP_TOTL","multiple":true,"label":"country_name"}
  ],
  chartId: 12
};


describe('FilterBox', () => {
  it('renders correctly without crashing', () => {
    const wrapper = shallow(
      <FilterBox { ...defaultProps }/>
    );
  });

  it('renders filterbox correctly', () => {
    const wrapper = mount(
      <FilterBox { ...defaultProps }/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  })
})
