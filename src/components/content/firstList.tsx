import React from 'react'
import { Divider, Skeleton, Tooltip, Avatar } from 'antd'
import { HeartOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons'
import { FirstListProps } from '../../utils/interface'
import { useHistory } from 'react-router'
import { IconText, userText } from '../../utils/commen'
import photo from '../../assets/4da52382276a71cebd0b922c535ab7ce.jpg'

const FirstList = ({ firstList }: FirstListProps) => {

	let history = useHistory()
	const gotoDetail = () => {
		history.push('/detail')
	}

	return (
		<div>
			<Skeleton active loading={firstList.length === 0} />
			{
				firstList.map((value: any, index: any) => {
					return (
						<div key={index}>
							<div className="list-content">
								<div className="item-left">
									<div className="info">
										<ul>
											<li className="item cur">{value.topic}</li>
											<li className="item cur hov">
												<Tooltip placement='top' title={userText(value)} getPopupContainer={(node: any) => node}>{value.name}</Tooltip>
											</li>
											<li className="item">{value.time}分钟前</li>
											<li className="cur hov">{value.tags}</li>
										</ul>
									</div>
									<div className="title" onClick={gotoDetail}>
										<h2 className="cur">{value.title}</h2>
									</div>
									<div className="comment">
										<ul>
											<IconText icon={HeartOutlined} text={value.like} key="list-vertical-like-o" />
											<IconText icon={MessageOutlined} text={value.recommend} key="list-vertical-message" />
											<IconText icon={ShareAltOutlined} text="" key="list-vertical-share" />
										</ul>
									</div>
								</div>
								<div className="item-right">
									<img src={photo} alt='' />
								</div>
							</div>
							<Divider />
						</div>
					)
				})
			}
		</div>
	)
}

export default FirstList;