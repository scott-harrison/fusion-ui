import { Input } from 'fusion-ui'
import { useState } from 'react'

const data = {
    docs: [
        {
            title: 'Basic usage',
            description: null,
            examples: [
                {
                    description: null,
                    demo: () => {
                        const [basicValue, setBasicValue] = useState('')

                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                onChange={(e) => setBasicValue(e.target.value)}
                                value={basicValue}
                            />
                        )
                    },
                    code: `<Input type="text" label="Example Input" />`,
                },
            ],
        },
        {
            title: 'Required',
            description: null,
            examples: [
                {
                    description: null,
                    demo: () => {
                        const [requiredValue, setRequiredValue] = useState('')

                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                required
                                onChange={(e) =>
                                    setRequiredValue(e.target.value)
                                }
                                value={requiredValue}
                            />
                        )
                    },
                    code: `<Input type="text" label="Example Input" required />`,
                },
            ],
        },
        {
            title: 'Sizes',
            description:
                '<p>There are three sizes of an Input: <code>large</code>, <code>medium</code>, <code>small</code></p>',
            examples: [
                {
                    description: null,
                    demo: () => {
                        const [smallValue, setSmallValue] = useState('')
                        const [mediumValue, setMediumValue] = useState('')
                        const [largeValue, setLargeValue] = useState('')

                        return (
                            <div>
                                <Input
                                    type="text"
                                    label="small"
                                    inputSize="small"
                                    onChange={(e) =>
                                        setSmallValue(e.target.value)
                                    }
                                    value={smallValue}
                                />
                                <Input
                                    type="text"
                                    label="medium"
                                    inputSize="medium"
                                    onChange={(e) =>
                                        setMediumValue(e.target.value)
                                    }
                                    value={mediumValue}
                                />
                                <Input
                                    type="text"
                                    label="large"
                                    inputSize="large"
                                    onChange={(e) =>
                                        setLargeValue(e.target.value)
                                    }
                                    value={largeValue}
                                />
                            </div>
                        )
                    },
                    code: `
                    <Input type="text" label="small" inputSize="small" />\n<Input type="text" label="medium" inputSize="medium" />\n<Input type="text" label="large" inputSize="large" />
                    `.trim(),
                },
            ],
        },
        {
            title: 'Error',
            description: null,
            examples: [
                {
                    title: 'Error state with input field',
                    description: 'input with that has error state',
                    demo: () => {
                        const [errorValue, setErrorValue] = useState('')

                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                error
                                onChange={(e) => setErrorValue(e.target.value)}
                                value={errorValue}
                            />
                        )
                    },
                    code: `<Input type="text" label="Example Input" required error />`,
                },
                {
                    title: 'Error with Helper Text',
                    description:
                        'Input with error state and contains helper text which describes the issue',
                    demo: () => {
                        const [errorValue, setErrorValue] = useState('')

                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                error
                                helperText="Fill in field"
                                onChange={(e) => setErrorValue(e.target.value)}
                                value={errorValue}
                            />
                        )
                    },
                    code: `<Input type="text" label="Example Input" required error helperText="is a required field" />`,
                },
            ],
        },
    ],
    api: [
        {
            property: 'inputSize',
            type: 'small | medium | large',
            default: 'medium',
            description: 'Set size of input field',
        },
        {
            property: 'type',
            type: 'string',
            default: 'text',
            description: 'Same as type attribute of a html input',
        },
        {
            property: 'label',
            type: 'string',
            default: '-',
            description: 'Label of input field',
        },
        {
            property: 'required',
            type: 'boolean',
            default: 'false',
            description: 'is a required input field',
        },
        {
            property: 'error',
            type: 'boolean',
            default: 'false',
            description:
                'input field has an error, will shake the input field to notify action needs to be taken',
        },
        {
            property: 'helperText',
            type: 'string',
            default: '-',
            description: 'text which will be shown below input field',
        },
        {
            property: 'onChange',
            type: 'function(e)',
            default: '-',
            description: 'Callback when user makes a change to input',
        },
    ],
}

export default data
