import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;
	
	padding-top: 80px;
	margin-bottom: 50px;

	h1 {
		font-size: 2rem;
		color: #000;
		font-weight: 700;
	}

	> p {
		font-size: 1rem;
		color: #555;
		margin-top: 20px;
	}

	.searchAndFilterContainer {
		display: flex;
		justify-content: center;
		margin: 20px 0;

		.filterButton {
			border-radius: 5px;
			border: none;
			padding: 0 24px;
			margin-left: 15px;
			cursor: pointer;

			color: ${props => props.isFilterActived ? "#ffffff" : "#000000"};
			background: ${props => props.isFilterActived ? "#D23D56" : "#eaeaea"};
		}
	}

	.searchContainer {
		display: flex;
		width: 100%;
		border-radius: 5px;
		height: max-content;
		padding: 18px;
		font-size: 1rem;
		background: #eaeaea;
		cursor: text;
		
		input {
			font-size: 0.9rem;
			border: none;
			background: #eaeaea;
			outline: 0;
			width: 100%;
			margin-left: 10px;
		}

		button {
			cursor: pointer;
			border: none;
			background: transparent;
		}
  	}

	.categoriesContainer {
		display: ${props => props.isFilterActived ? "flex" : "none"};
		flex-direction: column;
		gap: 10px;
		margin-bottom: 20px;

		article {
			display: flex;
			gap: 10px;
		}
	}
`

export const Category = styled.div`
	width: 51px;
	height: 51px;
	background: ${props => `${props.backgroundColor}`};
	opacity: ${props => props.enable ? "1" : "0.3"};
	border-radius: 5px;
	cursor: pointer;
	background-image: ${props => `url(${props.logoUrl})`};
	background-size: 70%;
	background-position: center;
	background-repeat: no-repeat;
` 