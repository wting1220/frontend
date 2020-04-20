import React, { memo, useState, useRef } from 'react'
import { Button, Upload, Modal, Dropdown } from 'antd'
import { PictureOutlined, LinkOutlined, NumberOutlined, PlusOutlined } from '@ant-design/icons'
import TopicMenuLists from './topicMenuLists'

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}

export default memo(function TopicAdd() {

  const [length, setLength] = useState<number>(1000) // 允许输入长度
  const [inplength, setInpLength] = useState<number>(0) // 允许输入长度
  const [visible, setVisible] = useState<boolean>(false) // 话题下拉菜单可见
  const input = useRef<any>('') // div-input 绑定 ref
  
  // 监听div中的内容
  const handleInput = () => {
    console.log(input)
    setInpLength(input.current.innerHTML.length)
    setLength(1000 - inplength)
  }

  const [previewVisible, setPreviewVisible] = useState<boolean>(false) // 
  const [previewImage, setPreviewImage] = useState<any>('')
  const [fileList, setFileList] = useState<any>([]) // 上传照片列表
  // 是否展示之前的照片
  const handleCancel = () => setPreviewVisible(false)
  // 照片
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }
  // 照片list
  const handleChange = ({ fileList }: any) => setFileList(fileList)

  //
  const data = [
    { id: 0, name: '不添加任何话题' },
    { id: 1, name: '活动推荐', attention: 76, topic: 45 },
    { id: 2, name: '活动推荐', attention: 76, topic: 45 },
    { id: 3, name: '活动推荐', attention: 76, topic: 45 },
    { id: 4, name: '活动推荐', attention: 76, topic: 45 },
    { id: 5, name: '活动推荐', attention: 76, topic: 45 },
    { id: 6, name: '活动推荐', attention: 76, topic: 45 },
    { id: 7, name: '活动推荐', attention: 76, topic: 45 },
    { id: 8, name: '活动推荐', attention: 76, topic: 45 },
    { id: 9, name: '活动推荐', attention: 76, topic: 45 },
    { id: 10, name: '活动推荐', attention: 76, topic: 45 },
  ]
  
  return (
    <div className='content-add content-li'>
      <div className='add-div'>
        <div contentEditable placeholder='告诉你个小秘密，发沸点时添加话题会被更多小伙伴看见呦~' onKeyDown={handleInput} className='add-input' ref={input} />
        {
          fileList.length > 0 ? <div className='add-imgs clearfix'>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 9 ? null : <div><PlusOutlined /></div>}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div> : ''
        }
        <span className='add-number'>{length}</span>
      </div>
      <div className='add-btn'>
        <div>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            multiple
            onPreview={handlePreview}
            onChange={handleChange}
            showUploadList={false}
            fileList={fileList}
          >
            <span className='span-icon cur'><PictureOutlined />图片</span>
          </Upload>
          <Upload><span className='span-icon cur'><LinkOutlined />链接</span></Upload>
          <Dropdown overlay={<TopicMenuLists data={data} setVisible={setVisible} />} onVisibleChange={visible => setVisible(visible)} visible={visible} trigger={['hover']} getPopupContainer={(node: any) => node} placement="bottomCenter">
            <span className='span-icon cur'><NumberOutlined />话题</span>
          </Dropdown>
        </div>
        <Button disabled={inplength > 0 ? true : false}>发布</Button>
      </div>
    </div>
  )
})