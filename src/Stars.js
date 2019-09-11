import React, { useState } from 'react';
import { Typography, Rate, Card, Button } from 'antd';
import NetlifyForm from 'react-netlify-form';

const { Text } = Typography;

const Stars = ({ setActive }) => {
	const [rating, setRating] = useState(null);

	return (
		<NetlifyForm name="rating">
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
									type="text"
									name="stars"
									value={rating}
									style={{ display: 'none' }}
								/>
								<section style={{ height: 40 }}>
									{rating ? (
										<Button
											htmlType="submit"
											size="large"
											type="primary"
											loading={loading}
											block
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
