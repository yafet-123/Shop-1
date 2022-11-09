import Image from 'next/image'
import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import {ProductsData} from '../data/products'
import Link from 'next/link'
export function Products(){
	return(
		<div className="products">
			<div className="profile">
				<Image src="/profile.jpg" width={100} height={100}/>
				<p>Addam Truin</p>
			</div>
			<div className="contact">
				<button>+251912345678</button>
				<button>Send Message</button>
			</div>

			<h1 className="productUser">Product By User</h1>

			<div>
				{ ProductsData.map((data,index)=>(
					<Link href={data.header} className="listOfProduct" key={index}>
						<Image src={data.image} width={75} height={75}/>
						<div className="listOfProductCenter">
							<h1>{data.header}</h1>
							<h5>{data.place}</h5>
							<p>{data.detail}</p>
							<h3>{data.price}</h3>
						</div>

						<div className="listOfProductRight">
							<AiOutlineHeart size={20} />
							<p>just now</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}