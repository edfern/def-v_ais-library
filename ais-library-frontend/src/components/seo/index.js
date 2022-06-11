import React from 'react';
import PropType from 'prop-types';
import { Helmet, HelmetProvider} from 'react-helmet-async';

export const SEO = ({ title, lang, meta, description }) => (
    <HelmetProvider>
        <Helmet
        htmlAttributes = {{
            lang,
        }}
        title = { title }
        meta = {[
            {
                name: 'description',
                content: description,
            },
            {
                property:'og:title',
                content: title,
            },
            {
                property: 'og:description',
                content: description,
            },
            {
                property: 'og:type',
                content: 'website',
            }
        ].concat(meta)}
    />
    </HelmetProvider>
);


SEO.defaultProps = {
    description: ``,
    meta: [],
    lang: `es`,
}
SEO.propTypes = {
    description: PropType.string,
    lang: PropType.string,
    meta: PropType.arrayOf(PropType.object),
    title: PropType.string.isRequired,
}
