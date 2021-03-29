import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components/macro";

function Nav({ isNavOpen }) {
	return (
		<nav
			css={`
				padding: 1rem 0;
				position: fixed;
				width: ${isNavOpen ? "25rem" : "8rem"};
			`}
		>
			<NavLink href="/list" isNavOpen={isNavOpen}>
				<i className="fas fa-book"></i>Reading List
			</NavLink>
			<NavLink href="/finished" isNavOpen={isNavOpen}>
				<i className="far fa-check-square"></i>Finished Books
			</NavLink>
			<NavLink href="/discover" isNavOpen={isNavOpen}>
				<i className="fas fa-book-open"></i>Discover
			</NavLink>
		</nav>
	);
}

function NavLink({ href, isNavOpen, children }) {
	const { pathname } = useRouter();
	const isMatch = pathname === href;

	return (
		<Link href={href}>
			<a
				css={`
					display: flex;
					flex-direction: ${isNavOpen ? "row" : "column"};
					padding: 1rem;
					text-align: center;
					position: relative;
					color: var(--colors-text--main);
					transition: background 0.3s;
					& i {
						font-size: 1.7rem;
						margin-left: 5rem;
						margin-right: 1rem;
						${!isNavOpen ? "margin:0;" : null}
					}
					&:hover {
						background: var(--colors-background--list);
						&:before {
							width: 100%;
						}
					}
					&:before {
						transition: width 0.3s;
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						height: 3px;
						width: 0;
						background: #3f5eb5;
					}
					${isMatch
						? `
					background: var(--colors-background--list);
				&:before {
					transition: width 0.3s;
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					height: 3px;
					width: 100%;
					background: #3f5eb5;
				}`
						: null}
				`}
			>
				{children}
			</a>
		</Link>
	);
}

export default Nav;
