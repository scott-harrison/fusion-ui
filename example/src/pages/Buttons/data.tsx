import {Button} from 'fusion-ui';

const data = [
    
    {
        "title": "Sizes",
        "description": "<p>Exercitation non eiusmod elit aliqua dolore elit fugiat aliquip Lorem magna.</p>",
        "examples": [
            {
                "title": 'Full',
                "description": "Exercitation non eiusmod elit aliqua dolore elit fugiat aliquip Lorem magna.",
                "demo": () => {
                    return (
                        <Button variant="primary" size="full" onClick={() => {}}>Full</Button>
                    )
                },
                "code": `<Button variant='primary' size='full' onClick={() => {}}>Full</Button>`
            },
            {
                "title": 'Large, Medium, Small',
                "description": "Exercitation non eiusmod elit aliqua dolore elit fugiat aliquip Lorem magna.",
                "demo": () => {
                    return (
                        <div>
                            <Button style={{marginRight: '10px'}} variant="primary" size="large" onClick={() => {}}>Large</Button>
                            <Button style={{marginRight: '10px'}} variant="primary" size="medium" onClick={() => {}}>Medium</Button>
                            <Button style={{marginRight: '10px'}} variant="primary" size="small" onClick={() => {}}>Small</Button>
                        </div>
                    )
                },
                "code": `
                    <Button variant="primary" size="large" onClick={() => {}}>Large</Button\n<Button variant="primary" size="medium" onClick={() => {}}>Medium</Button>\n<Button variant="primary" size="small" onClick={() => {}}>Small</Button>  
                `.trim()
            }
        ]
    },
    {
        "title": "Disabled",
        "description": "<p>Exercitation non eiusmod elit aliqua dolore elit fugiat aliquip Lorem magna.</p>",
        "examples": [
            {
                "demo": () => {
                    return (
                        <Button variant="primary" size="full" disabled={true} onClick={() => {}}>Full</Button>
                    )
                },
                "code": `<Button variant='primary' size='full' disabled={true} onClick={() => {}}>Full</Button>`
            }
        ]
    },
    {
        "title": "Variants",
        "description": "<p>Exercitation non eiusmod elit aliqua dolore elit fugiat aliquip Lorem magna.</p>",
        "examples": [
            {
                "title": "Primary",
                "demo": () => {
                    return (
                        <Button variant="primary" size="full" onClick={() => {}}>Full</Button>
                    )
                },
                "code": `<Button variant='primary' size='full' onClick={() => {}}>Full</Button>`
            },
            {
                "title": "Outline",
                "demo": () => {
                    return (
                        <Button variant="outline" size="full" onClick={() => {}}>Full</Button>
                    )
                },
                "code": `<Button variant='outline' size='full' onClick={() => {}}>Full</Button>`
            },
            {
                "title": "link",
                "demo": () => {
                    return (
                        <Button variant="link" size="medium" onClick={() => {}}>Full</Button>
                    )
                },
                "code": `<Button variant='link' size='medium' onClick={() => {}}>Full</Button>`
            }
        ]
    },
]

export default data;