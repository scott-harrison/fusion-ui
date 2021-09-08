import { Input } from 'fusion-ui'

const data = {
    docs: [
        {
            title: 'Basic usage',
            description: null,
            examples: [
                {
                    description: null,
                    demo: () => {
                        return <Input type="text" label="Example Input" />
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
                        return (
                            <Input type="text" label="Example Input" required />
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
                        return (
                            <div>
                                <Input
                                    type="text"
                                    label="small"
                                    inputSize="small"
                                    required
                                />
                                <Input
                                    type="text"
                                    label="medium"
                                    inputSize="medium"
                                    required
                                />
                                <Input
                                    type="text"
                                    label="large"
                                    inputSize="large"
                                    required
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
                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                required
                                error
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
                        return (
                            <Input
                                type="text"
                                label="Example Input"
                                required
                                error
                                helperText="Fill in field"
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
