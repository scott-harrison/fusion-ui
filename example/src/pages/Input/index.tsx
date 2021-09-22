import Page from '../../components/Page'
import ApiRef from '../../components/ApiRef'
import data from './data'

const InputPage = () => (
    <div>
        <Page
            name="Card"
            description="A basic widget for getting the user input is a text field.
            Keyboard and mouse can be used for providing or changing
            data."
            docs={data.docs}
        />
        {data.api.length && <ApiRef data={data.api} />}
    </div>
)

export default InputPage
