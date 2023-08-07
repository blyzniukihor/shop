"use client";
import React from 'react';
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types";
import { Button, Chip, Divider, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";

const Page = () => {
	const { id } = useParams();
	
	const getData = (id) => {
		return fetch(`https://fakestoreapi.com/products/${id}`)
			.then(response => response.json());
	};
	
	const { data, isLoading, error } = useQuery<Product>({ queryKey: ['singleProduct'], queryFn: () => getData(id) })
	
	if (isLoading) return <div>...loading</div>
	if (error) return <div> something went wrong </div>
	
	return (
		<div>
			{ !isLoading && !error && (
				<Grid container>
					<Grid item md={7}>
						<div style={{ maxWidth: '500px' }}>
							<Image priority={true} src={data?.image} alt={data.title} width={400} height={400} layout="responsive"/>
						</div>
					</Grid>
					<Grid item md={5}>
						<Typography variant='h3'>{ data?.title }</Typography>
						<div style={{ width: '120px', marginTop: '30px', padding: '10px', borderRadius: '30px', background: '#1976d2' }}>
							<Rating name="read-only" value={data.rating.rate} readOnly />
							<Typography variant='body2' align='center'>{data.rating.rate}/{data.rating.count}</Typography>
						</div>
						<Chip
							sx={{ marginTop: '30px' }}
							color="primary"
							label={`$${data.price} USD`}
						/>
						<Divider sx={{ background: '#1e1e1e', margin: '30px 0' }}/>
						<Typography variant='h6'>{ data?.description }</Typography>
						<Button sx={{ marginTop: '30px' }} variant="contained">add to cart</Button>
					</Grid>
				</Grid>
			) }
		</div>
	);
};

export default Page;