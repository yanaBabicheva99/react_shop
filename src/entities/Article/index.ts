export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { Article } from './model/types/article';
export { fetchArticleDetails } from './model/services/FetchArticleDetails/FetchArticleDetails';
export { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleBlockText } from './ui/ArticleBlockComponent/ArticleBlockText/ArticleBlockText';
export {
    ArticleBlockText as ArticleBlockTextType, ArticleBlockType, ArticleType,
} from '../Article/model/types/article';
