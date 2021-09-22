import ApiRef from '../../components/ApiRef'
import Page from '../../components/Page'
import data from './data'

const CardPage = () => (
    <div>
        <Page
            name="Card"
            description="A simple card box which acts like a container"
            docs={data.docs}
        />
        {data.api.length && <ApiRef data={data.api} />}
    </div>
)

export default CardPage
