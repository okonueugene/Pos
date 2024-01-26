import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap-v5';
import MasterLayout from '../MasterLayout';
import TabTitle from '../../shared/tab-title/TabTitle';
import {getFormattedMessage, placeholderText} from '../../shared/sharedMethod';
import HeaderTitle from "../header/HeaderTitle";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import Spinner from "../../shared/components/loaders/Spinner";


const TaxSettings = (props) => {
    const {frontSetting} = props;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!frontSetting) {
            setLoading(true);
        }
    }, [frontSetting]);

    const handleOnSubmit = (event) => {
        event.preventDefault();
    };

    const renderTaxSettings = () => {
        return (
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>
                        {getFormattedMessage('settings.tax-settings.input.name.label')}
                    </Form.Label>
                    <Form.Control type="text" name="name"
                                  placeholder={placeholderText('settings.tax-settings.input.name.placeholder')}
                                  defaultValue={frontSetting?.name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        {getFormattedMessage('settings.tax-settings.input.percentage.label')}
                    </Form.Label>
                    <Form.Control type="number" name="percentage"
                                  placeholder={placeholderText('settings.tax-settings.input.percentage.placeholder')}
                                  defaultValue={frontSetting?.percentage}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        {getFormattedMessage('settings.tax-settings.input.description.label')}
                    </Form.Label>
                    <Form.Control as="textarea" name="description"
                                  placeholder={placeholderText('settings.tax-settings.input.description.placeholder')}
                                  defaultValue={frontSetting?.description}/>
                </Form.Group>
            </Form>
        );
    };

    return (
        <MasterLayout>
            <div className="tax-settings">
                <TopProgressBar/>
                <TabTitle title={getFormattedMessage('settings.tax-settings.title')}/>
                <HeaderTitle title={getFormattedMessage('settings.tax-settings.title')}/>
                <div className="tax-settings__form">
                    {loading ? <Spinner/> : renderTaxSettings()}
                </div>
            </div>
        </MasterLayout>
    );
}

const mapStateToProps = (state) => {
    const {frontSetting} = state;
    return {frontSetting};
};

export default connect(mapStateToProps)(TaxSettings);

