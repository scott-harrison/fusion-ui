import Page from '../../components/Page'
import ApiRef from '../../components/ApiRef'
import data from './data'

const ButtonPage = () => (
    <div>
        <Page
            name="Buttons"
            description="Fusions buttons styles are very simplistic offering outline
            and solid variants."
            docs={data.docs}
        />
        {data.api.length && <ApiRef data={data.api} />}
    </div>
)

export default ButtonPage
