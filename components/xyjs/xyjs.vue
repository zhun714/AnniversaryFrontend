<template>
	<view class="flex-col page">
	  <view class="flex-col">
	   
	   
	    
	    <view class="flex-col group_3">
	      <view class="flex-row items-center group_4 space-x-10" style="margin: 0;">
	        <view class="section_2"></view>
	        <text class="font_3 text_2">计算机科学与技术</text>
	      </view>
	     
	    </view>
	  </view>
	  <view class="flex-col group_5">
	    <view class="flex-col justify-start items-end relative group_6">
	      <image
	        class="image_3"
	        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16709868467034573708.png"
	      />
	      <text class="font_2 text_4 pos_2">
	        福州大学计算机科学与技术专业起步于1977年的计算机技术专业和软件专业，2003年获批工程硕士（计算机技术领域）专业学位授予点，2006年获批“计算机科学与技术”一级学科硕士学位授予点，2016年获批“计算机科学与技术”一级学科博士学位授予点，本学科多次列入国家“211工程”重点学科建设项目，并列入福建省“双一流”建设学科（高峰学科），2020年3月，福州大学“计算机科学”新增进入ESI全球排名前1%。本学科立足学科前沿，围绕服务国家和地方经济社会发展需求，组建特色学科平台与学科团队、凝练特色学科方向、发挥特色学科优势，在提高服务社会贡献率方面持续进行探索与实践，取得了较大成效，为福建省经济社会发展和“数字福建”战略做出了巨大贡献。
	      </text>
	    </view>
	    <text class="font_2 text_5 text_6">
	      本学科已形成数据挖掘、智能信息处理、网络信息安全、网络与分布式系统等四个特色优势学科方向，拥有卫星空间信息技术综合应用国家地方联合工程研究中心、空间数据挖掘与信息共享教育部重点实验室、数字福建大数据基础技术研究院等9个国家级和省部级科研平台，以及网络信息安全与计算机技术国家级实验教学示范中心等3个国家级和省级实验教学示范中心。本学科拥有一支为数80人的师德优良、学术水平高、梯队结构合理、符合要求的专任教师队伍，其中教授25名、副教授32名，具有博士学位的61名。近5年，本学科师生聚焦国家和福建省重大需求开展科学研究，主持国家自然科学基金38项，发表SCI论文200余篇，其中，在CCF
	      A类和中科院1区期刊上发表论文50余篇，产出一批重要的研究成果，获得省部级一等奖3项、二等奖2项、三等奖4项。
	    </text>
	    <view class="flex-col justify-start items-start relative group_7">
	      <image
	        class="image_4"
	        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6353f1ea5a7e3f0310e61ff3/6353f319fe65f70012e4f328/16709868467054274174.png"
	      />
	      <text class="font_2 text_5 pos_3">
	        本学科以培养德智体美劳全面发展的社会主义建设者和接班人为目标，努力提升人才培养质量。通过扩大宣传力度和制定激励政策来确保生源质量，本学科录取的硕士研究生60%来自于985或211学校，博士研究生达到85%。本学科高度重视研究生培养过程，为研究生设置结构合理的课程体系,以“课赛结合”为抓手强化课程实践；在严格的研究生导师遴选、考核基础上，以导师团队指导的方式，提升研究生培养质量。本学科在国内外学科竞赛中取得优异成绩，其中，集成电路辅助设计团队连续三年获得ICCAD竞赛全球第一名，超算团队连续两年获得ASC全球总决赛一等奖，ACM团队先后九次晋级ACM全球总决赛（2018年全球第14名）。
	      </text>
	    </view>
	  </view>
	</view>
</template>
<script>
  export default {
    name:"xyjs",
    data() {
      return {  
        		isActive: 0,
        					navList:[
        						{
        							index: 0,
        							title: '计算机科学与技术',
                 
        						}
        					]
          
          
      };
    },
    		methods:{
        checked(index) {
				this.isActive = index
			},
    		}
  }
</script>

<style lang="scss" >
	/************************************************************
	** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
	** 否则页面将无法正常显示                                  **
	************************************************************/
	
	page {
	  width: 100vw;
	  height: 100vh;
	  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
	    'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
	}
	
	view,
	image,
	text {
	  box-sizing: border-box;
	  flex-shrink: 0;
	}
	
	.flex-row {
	  display: flex;
	  flex-direction: row;
	}
	
	.flex-col {
	  display: flex;
	  flex-direction: column;
	}
	
	.justify-start {
	  justify-content: flex-start;
	}
	
	.justify-end {
	  justify-content: flex-end;
	}
	
	.justify-center {
	  justify-content: center;
	}
	
	.justify-between {
	  justify-content: space-between;
	}
	
	.justify-around {
	  justify-content: space-around;
	}
	
	.justify-evenly {
	  justify-content: space-evenly;
	}
	
	.items-start {
	  align-items: flex-start;
	}
	
	.items-end {
	  align-items: flex-end;
	}
	
	.items-center {
	  align-items: center;
	}
	
	.items-baseline {
	  align-items: baseline;
	}
	
	.items-stretch {
	  align-items: stretch;
	}
	
	.self-start {
	  align-self: flex-start;
	}
	
	.self-end {
	  align-self: flex-end;
	}
	
	.self-center {
	  align-self: center;
	}
	
	.self-baseline {
	  align-self: baseline;
	}
	
	.self-stretch {
	  align-self: stretch;
	}
	
	.flex-1 {
	  flex: 1 1 0%;
	}
	
	.flex-auto {
	  flex: 1 1 auto;
	}
	
	.grow {
	  flex-grow: 1;
	}
	
	.grow-0 {
	  flex-grow: 0;
	}
	
	.shrink {
	  flex-shrink: 1;
	}
	
	.shrink-0 {
	  flex-shrink: 0;
	}
	
	.relative {
	  position: relative;
	}
.page {
  padding-bottom: 2px;
  background-color: #f5f5f5;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.image {
  width: 395px;
  height: 42px;
}
.text-wrapper {
  flex: 1 1 131px;
  padding: 16px 0;
  background-color: #d47d71;
  height: 49px;
}
.font_1 {
  font-size: 18px;
  font-family: YOUSHEhaoshenti;
  line-height: 17px;
  color: #ffffff;
}
.text-wrapper_2 {
  padding: 16px 0;
  flex: 1 1 131px;
  background-color: #d24735;
  height: 49px;
}
.group {
  margin-top: 14px;
  padding: 0 13px;
}
.space-x-14 > view:not(:first-child),
.space-x-14 > text:not(:first-child),
.space-x-14 > image:not(:first-child) {
  margin-left: 14px;
}
.image_2 {
  width: 18px;
  height: 24px;
}
.group_2 {
  padding: 4px 0;
}
.font_2 {
  font-size: 12px;
  font-family: SourceHanSansCN;
  line-height: 14px;
  color: #000000;
}
.text {
  color: #383838;
  line-height: 11px;
}
.section {
  background-color: #cccccc00;
  width: 30px;
  height: 20px;
}
.pos {
  position: absolute;
  left: 55.5px;
  top: 0;
}
.group_3 {
  margin-top: 13px;
  padding: 0 23px;
}
.group_4 {
  padding-bottom: 6px;
}
.space-x-10 > view:not(:first-child),
.space-x-10 > text:not(:first-child),
.space-x-10 > image:not(:first-child) {
  margin-left: 10px;
}
.section_2 {
  background-color: #d24735;
  width: 10px;
  height: 24px;
}
.font_3 {
  font-size: 20px;
  font-family: SourceHanSansCN;
  line-height: 19px;
  font-weight: 700;
}
.text_2 {
  color: #000000;
}
.text-wrapper_3 {
  margin-left: 20px;
  padding: 2px 0 8px;
  background-color: #cccccc00;
}
.text_3 {
  color: #d1d1d1;
}
.group_5 {
  margin: 24px 15px 0 24px;
  height: 570px;
}
.group_6 {
  padding-top: 160px;
}
.image_3 {
  width: 150px;
  height: 149px;
}
.text_4 {
  text-indent: 21.5px;
}
.pos_2 {
  position: absolute;
  left: 0;
  right: 6.5px;
  top: 0;
}
.text_5 {
  text-indent: 22px;
}
.text_6 {
  margin-top: -118px;
}
.group_7 {
  margin-right: 10px;
  margin-top: 4px;
  padding: 8px 0 36px;
}
.image_4 {
  margin-left: 10px;
  width: 150px;
  height: 126px;
}
.pos_3 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>