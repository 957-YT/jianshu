import { fromJS } from 'immutable'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writerList:[],
	showScroll: false
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'change_home_data':
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
				writerList: fromJS(action.writerList)
			})
		case 'add_article_list':
			return state.set('articleList', state.get('articleList').concat(fromJS(action.articleList)));
		case 'show_scroll_top':
			return state.set('showScroll', action.showScroll);
		default: 
			return state;
	}
}