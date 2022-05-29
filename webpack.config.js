import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const config = {
    devtool: "source-map",
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("src/html/index.html"),
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                // use: ["style-loader", "css-loader"]}, // faster build in development
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            //  assets referred from html
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },
            // Image assets
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource"
            },
            // Font assets
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
        ]
    },
    devServer: {
        hot: false,     // hot reloading enablen
        liveReload: true,
        static: {directory: path.resolve("dist")},
        open: true
    },
    output: {
        // Maakt de 'dist' folder leeg alvorens nieuwe files te genereren.
        clean: true,
    },
    /**
     * Het "output" veld kan verder gebruikt worden om de webpack defaults (output folder: 'dist', filename voor bundle: 'main.js') aan te passen
     * naar je eigen voorkeuren (bv. 'build' wordt ook veel gebruikt)
     * output: {
     *  filename: "main.js",
     *  path: path.resolve(__dirname, "dist"),
     *  clean: true,
     * },
     */
};
export default config
