import { Card } from 'fusion-ui'

const data = {
    docs: [
        {
            title: 'Basic',
            description: '<p>Simple use of a card</p>',
            examples: [
                {
                    demo: () => {
                        return (
                            <Card>
                                <p>hello world</p>
                            </Card>
                        )
                    },
                    code: `<Card>\n    <p>hello world</p>\n</Card>`,
                },
            ],
        },
        {
            title: 'Title',
            description: '<p>Card with a title</p>',
            examples: [
                {
                    demo: () => {
                        return (
                            <Card title="Hello">
                                <p>World</p>
                            </Card>
                        )
                    },
                    code: `<Card title="Hello">\n    <p>World</p>\n</Card>`,
                },
            ],
        },
    ],
    api: [
        {
            property: 'title',
            type: 'string',
            default: '-',
            description: 'Title of the card',
        },
        {
            property: 'width',
            type: 'string',
            default: '-',
            description: 'define a size of card',
        },
        {
            property: 'center',
            type: 'boolean',
            default: 'false',
            description: 'center the card within the parent element',
        },
    ],
}

export default data
