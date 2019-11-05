import React, { useState } from 'react';
import { Typography, Rate, Card, Button } from 'antd';
import NetlifyForm from 'react-netlify-form';
import { allRadius } from '../Constants';

const { Text } = Typography;

const Stars = ({ setActive, pairTime, people }) => {
	const [rating, setRating] = useState(null);

	return (
		<NetlifyForm name='rating'>
			{({ loading, error, success }) => {
				if (error || success) setActive('Feedback');
				return (
					<div>
						{!loading && !success && (
							<div>
								<Card
									style={{ marginBottom: 30 }}
									bodyStyle={{ textAlign: 'center' }}
								>
									<Text strong>Rate this session</Text>
									<Rate
										style={{ width: '100%' }}
										onChange={val => setRating(val)}
									/>
								</Card>
								<input
									type='text'
									name='stars'
									value={rating}
									style={{ display: 'none' }}
								/>
								<input
									type='text'
									name='participants'
									value={people.length}
									style={{ display: 'none' }}
								/>
								<input
									type='text'
									name='pair-time'
									value={pairTime}
									style={{ display: 'none' }}
								/>

								<section style={{ height: 40 }}>
									{rating ? (
										<Button
											htmlType='submit'
											size='large'
											type='primary'
											loading={loading}
											block
											style={{
												borderRadius: allRadius,
												height: 50,
											}}
										>
											Submit Feedback
										</Button>
									) : null}
								</section>
							</div>
						)}
					</div>
				);
			}}
		</NetlifyForm>
	);
};

export default Stars;
