import React, { memo, useState, useEffect } from 'react'
import { Button, Upload, Modal, Dropdown, message, Input, Tag, Form } from 'antd'
import { PictureOutlined, LinkOutlined, NumberOutlined, PlusOutlined } from '@ant-design/icons'
import TopicMenuLists from './topicMenuLists'
import { ThemeListAPI, addTopicAPI } from '../../common/api.js'
import Axios from 'axios'
import { useDispatch } from "react-redux";
import { changeImgsAction, deleteImgsAction } from "../../actions/action";
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default memo(function TopicAdd({ theme, setTheme, getTopicList}:any) {

  const [length, setLength] = useState<number>(1000) // 允许输入长度
  const [inpValue, setInpValue] = useState<string>('')  // 输入框的值
  const [href, setHref] = useState<string>('') // 链接
  const [visible, setVisible] = useState<boolean>(false) // 话题下拉菜单可见
  const [modalvisible, setModalVisible] = useState<boolean>(false) // 链接弹框
  const [themeList, setThemeList] = useState<any>([]) // 所有话题列表
  const [previewVisible, setPreviewVisible] = useState<boolean>(false) //点击查看大图modal框
  const [previewImage, setPreviewImage] = useState<any>('') // 大图中的imgurl
  const [previewTitle, setPreviewTitle] = useState<string>('') // 大图中的title
  const [fileList, setFileList] = useState<any>([]) // 上传照片列表
  const uid = useSelector((state: any) => state.userID)
  const imgs = useSelector((state: any) => state.imgs)
  let { tid } = useParams()
  const dispatch = useDispatch();
  const [form] = Form.useForm()

  useEffect(() => { 
    getThemeList()
  }, [])
  
  return (
    <div className='content-add content-li'>
      <div className='add-div'>
        <Input.TextArea
          autoSize={{ minRows: 2 }}
          placeholder='告诉你个小秘密，发沸点时添加话题会被更多小伙伴看见呦~'
          onChange={handleInput}
          className='add-input'
          maxLength={1000}
          value={inpValue}
        />
        {
          fileList.length > 0
          ? <div className='add-imgs clearfix'>
              <Upload
                customRequest={upload}
                listType="picture-card"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 9 ? null : <div><PlusOutlined /></div>}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={handleCancel} title={previewTitle}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          : ''
        }
        <div>{href !== '' && <a href={href}>{href}</a>}</div>
        <div>{theme !== '' && <Tag color="purple">{theme}</Tag>}</div>
        <span className='add-number'>{length}</span>
      </div>
      <div className='add-btn'>
        <div>
          <Upload
            customRequest={upload}
            onChange={handleChange}
            beforeUpload={beforeUpload}
            showUploadList={false}
          >
            <span className='span-icon cur'><PictureOutlined />图片</span>
          </Upload>
          <span className='icon-modal'>
            <span className='span-icon cur' onClick={() => setModalVisible(true)}><LinkOutlined />链接</span>
            <Modal
              title="添加链接"
              visible={modalvisible}
              onOk={addHref}
              onCancel={() => setModalVisible(false)}
              forceRender 
            >
              <Form name="basic" form={form}>
                <Form.Item label="链接" name="ahref">
                  <Input width={400} />
                </Form.Item>
              </Form>
            </Modal>
          </span>
          <Dropdown
            overlay={<TopicMenuLists data={themeList} setVisible={setVisible} setTheme={setTheme} />}
            onVisibleChange={flag => setVisible(flag)}
            visible={visible}
            getPopupContainer={node => node}
            placement="bottomCenter"
            trigger={['click']}
            disabled={tid ? true : false}
          >
            <span className='span-icon cur'><NumberOutlined />话题</span>
          </Dropdown>
        </div>
        <Button disabled={length === 1000 ? true : false} onClick={publish}>发布</Button>
      </div>
    </div>
  )

  // 监听div中的内容
  function handleInput({ target }:any) {
    setLength(1000 - target.value.trim().length)
    setInpValue(target.value.trim())
  }

  // 获取所有话题列表
  function getThemeList() { 
    ThemeListAPI().then(data => {
      if (data.err === null) {
        setThemeList(themeList.concat(data.data))
      } else { 
        message.warn(data.msg)
      }
    })
  }

  // 上传图片前的校验
  function beforeUpload(file:any) { 
    const isJpgOrPng = file.type.split('/')[0] === 'image'
    if (!isJpgOrPng) {
      message.error('请上传图片!');
    }
    return isJpgOrPng;
  }

  // 上传
  function upload(file: any) {
    const formData = new FormData();
    formData.append('img', file.file);
    Axios.post('/api/UploadAPI', formData)
      .then(data => { 
        if (data.data.err === null) {
          message.success('上传成功')
          dispatch(changeImgsAction(data.data.imgUrl));
        } else { 
          message.warn(data.data.msg)
        }
      })
  }

  // 是否展示大图
  function handleCancel() {
    setPreviewVisible(false)
  }

  // 大图照片
  async function handlePreview(file: any) {
    setPreviewImage(`http://localhost:3000/assets/${file.originFileObj.name}`)
    setPreviewVisible(true)
    setPreviewTitle(file.originFileObj.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  // 照片list
  function handleChange({ fileList }: any) {
    fileList.forEach((item:any, index:number) => {
      item.status = 'done'
      item.name = `http://localhost:3000${imgs[index]}`
    })
    setFileList(fileList)
  } 

  // 添加链接
  function addHref() { 
    setModalVisible(false)
    setHref(form.getFieldValue('ahref'))
  }

  // 发布
  function publish() { 
    addTopicAPI({
      uid,
      content: inpValue,
      imgs,
      href,
      theme,
    }).then(data => { 
      if (data.err === null) {
        message.success(data.msg)
        getTopicList(theme)
        setInpValue('')
        setFileList([])
        dispatch(deleteImgsAction());
        setTheme('')
        setHref('')
        getThemeList()
      } else { 
        message.warn(data.msg.message)
      }
    })
  }
})