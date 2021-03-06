import React from 'react';
import renderer from "react-test-renderer";
import AppList from "./app-list";
import AppListImage from "./app-list-image";
import AppListBage from "./app-list-badge";
import Avtar from "../../images/avtar.png";

test('renders app list with icon and badge correctly ', () => {
    const onListClick = jest.fn();

    const tree = renderer
        .create(
            <AppList
                onListClick={onListClick}
                listItem={null}
                ListIcon={<AppListImage url={Avtar} />}
                Badge={<AppListBage value={6788} />}
            />
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});
