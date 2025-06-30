import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCSSLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                        auto: /\.module./,
                    },
                },
            },
            'sass-loader',
        ],

    };
}
