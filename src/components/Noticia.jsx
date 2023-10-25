import React from 'react';

function Noticia(props) {

    const { slug } = props.match.params;
    return (
        <Layout>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Helmet>
            </HelmetProvider>
            <div>
                
            </div>
        </Layout>
    );
}

export default Noticia;