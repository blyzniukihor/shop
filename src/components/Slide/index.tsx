import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";

const Slide = ({ product }) => {
	const router = useRouter()
	
	const onSlideClick = () => router.push(`/products/${product.id}`)
	
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
				<Card className='carousel'>
					<CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
							<Image priority={true} src={product.image} alt={product.title} width={200} height={200} layout="responsive"/>
						</div>
						<Typography variant='h6'>{ product.title }</Typography>
						
						<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<Chip
								color="primary"
								label={`price ${product.price}$`}
							/>
							<Button
								variant="contained"
								onClick={onSlideClick}
							>
								more
							</Button>
						</Box>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Slide;