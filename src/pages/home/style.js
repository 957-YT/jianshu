import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft = styled.div`
	width: 625px;
	padding-top: 30px;
	margin-left: 15px;
	float: left;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	margin-left: 18px;
	margin-bottom: 18px;
	background-color: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	padding: 20px 0;
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	.list-pic{
		dispaly: block;
		float: right;
		width: 125px;
		height: 100px;
		border-radius: 5px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title{
		line-height: 27px;
		font-size: 18px;
		color: #333;
	}
	.desc{
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;


export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItme = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props => props.imgUrl)});
	background-size: contain;
	margin-top: 8px;
`;

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background-color: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	cursor: pointer;
	color: #fff;
`;


export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width:60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor: pointer;
`;

export const WriterWrapper = styled.div`
	width: 280px;
	font-size: 14px;
	color: #969696;
`;

export const WriterItem = styled.div`
	overflow:hidden
	margin-top: 10px;
	cursor: pointer;
	.writer-pic{
		width:48px;
		height: 48px;
		border: 1px solid #ddd;
		border-radius: 50%;
		float: left
	}
`;

export const WriterInfo= styled.div`
	width: 220px;
	float:left;
	margin-left: 10px;
	margin-top: 5px;
	.title{
		
    margin-right: 60px;
		font-size: 14px;
	}
	.desc{
		margin-top: 5px;
    font-size: 12px;
		color: #969696;
	}

`
