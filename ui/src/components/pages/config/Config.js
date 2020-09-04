import React, { Fragment, useEffect, useContext } from 'react';
import { GlobalContext} from 'context/GlobalState';
import List from 'components/elements/List'
import ButtonAdd from 'components/elements/ButtonAdd'
import Heading from 'components/elements/Heading'

const Config = ({ history }) => {
    const { configs, removeConfig, getConfigs } = useContext(GlobalContext);

    const handleAdd = () => {
        history.push('configs/add')
    }
    const handleEdit = (id) => {
        history.push(`configs/${id}/edit`)
    }
    const handleDelete = (id) => {
        removeConfig(id)
    }

    const items = configs.map(config => ({
        id: config.id,
        title: config.json_config,
        description: `#${config.id}`
    }))

    useEffect(() => {
        getConfigs()
    }, []);

    const headingRight = <ButtonAdd label="Add Config" onClick={handleAdd} />

    return (
        <Fragment>
            <Heading label="Configs" right={headingRight} />
            <List
                items={items}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </Fragment>
    );
}

export default Config
