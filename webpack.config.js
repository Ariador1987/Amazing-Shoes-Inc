const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlTemplatePlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist";
} else {
    mode = "development";
}

// const mode =
//     process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
    mode: mode,
    entry: "./src/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings this will reference .babelrc
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlTemplatePlugin({
            template: "./src/index.html",
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
};
