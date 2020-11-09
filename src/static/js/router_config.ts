
export interface RouterConfigType {
    icon?: string;
    index?: string;
    title: string;
    roleTypes: string;
    subList: SubListType[];
}


export interface SubListType {
    label: string;
    roleTypes?: string;
    index?: string;
    subs?: {
        index?: string;
        title?: string;
        roleTypes?: string;
    }[]
}

const router_config: RouterConfigType[] = [
    // 系统管理
    {
        icon: 'el-icon-date',
        index: Math.random() + '',
        title: '系统管理',
        roleTypes: 'admin:manage',
        subList: [{
            index: `${Date.now()}`,
            label: "资源权限",
            roleTypes: 'back:resourcePer',
            subs: [{
                index: 'roleList',
                title: '角色管理',
                roleTypes: 'admin:role:list'
            }, {
                index: 'userList',
                title: '用户管理',
                roleTypes: 'admin:sysUser:list'
            }, {
                index: 'resourceList',
                title: '资源管理',
                roleTypes: 'admin:sysPermission:list'
            }]
        }
        ],
    },
    // 运营管理
    {
        icon: 'el-icon-date',
        index: Math.random() + '',
        title: '运营管理',
        roleTypes: 'back:operate',
        subList: [{
            index: `${Date.now()}`,

            label: "标签管理",
            roleTypes: 'back:sysTag',
            subs: [{
                index: 'tagsList',
                title: '标签管理',
                roleTypes: 'back:sysTag:list'
            }, {
                index: 'tagsGrouped',
                title: '标签分组',
                roleTypes: 'back:sysTagGroup:list'
            }]
        },
        // 分类管理
        {
            index: `${Date.now()}`,
            label: "分类管理",
            roleTypes: 'back:sysClassify',
            subs: [{
                index: 'classifyList',
                title: '分类管理',
                roleTypes: 'back:sysClassify:list'
            }]
        },
        // 会员级别
        {
            index: `${Date.now()}`,
            label: "会员级别",
            roleTypes: 'back:memberLevel',
            subs: [{
                index: 'membershipGradeList',
                title: '会员级别',
                roleTypes: 'back:memberLevel:list'
            }]
        },
        // 价格策略
        {
            index: `${Date.now()}`,
            label: "价格策略",
            roleTypes: 'back:priceTacticsBase',
            subs: [{
                index: 'priceStrategyList',
                title: '价格策略',
                roleTypes: 'back:priceTacticsBase:list'
            },
            {
                index: 'worksPricingList',
                title: '单品定价',
                roleTypes: 'back:priceTacticsBase:skuList'
            },
            {
                index: 'sampleReelsPriceList',
                title: '作品集定价',
                roleTypes: 'back:priceTacticsBase:setList'
            },

            ]
        },
        // 广告位管理
        {
            label: "广告管理",
            index: `${Date.now()}`,
            roleTypes: 'back:advert',
            subs: [{
                index: 'advertisingManagementList',
                title: '广告位管理',
                roleTypes: 'back:advert:list'
            }, {
                index: 'scheduleList',
                title: '排程管理',
                roleTypes: 'back:advertSchedule:list'
            }]
        },
        // 大小专题
        {
            label: "大小专题",
            index: `${Date.now()}`,
            roleTypes: 'back:subjectBase',
            subs: [{
                index: 'littlespecialList',
                title: '小专题管理',
                roleTypes: 'back:subjectBase:list'
            }]
        },
        // 首页 homeAppList
        {
            label: "首页管理",
            index: `${Date.now()}`,
            roleTypes: 'back:zFirst',
            subs: [{
                index: 'homeAppList',
                title: '一天一书',
                roleTypes: 'back:zFirst:list'
            }]
        },

        // {
        //   index: 'preferential',
        //   label: "优惠促销",
        //   roleTypes: 'back:advert',
        //   subs:[{
        //     index: 'sales',
        //     title: '促销',
        //     roleTypes: 'back:memberCardSku:list'
        //   }]
        // }
        // 动态管理
        {
            label: "动态管理",
            index: `${Date.now()}`,
            roleTypes: 'back:dynamic',
            subs: [{
                index: 'commentList',
                title: '动态管理',
                roleTypes: 'back:dynamic:list'
            }]
        },
        {
            label: "举报投诉",
            index: `${Date.now()}`,
            roleTypes: 'back:tipOff',
            subs: [
                {
                    index: 'report',
                    title: '举报列表',
                    roleTypes: 'back:tipOff:list'
                }
            ]
        },
        {
            label: "海报管理",
            index: `${Date.now()}`,
            roleTypes: 'back:posterBase',
            subs: [
                {
                    index: 'poster',
                    title: '海报列表',
                    roleTypes: 'back:posterBase:list'
                }
            ]
        }
        ],
    },
    // 内容管理
    {
        icon: 'el-icon-date',
        index: Math.random() + '',
        title: '内容管理',
        roleTypes: 'back:content',
        subList: [{
            label: "资源管理",
            index: `${Date.now()}`,
            roleTypes: 'back:resource',
            subs: [{
                index: 'coverList',
                title: '封面管理',
                roleTypes: 'back:worksCover:list'
            }, {
                index: 'avManagementList',
                title: '媒体资源',
                roleTypes: 'back:mediaFile:list'
            }, {
                index: 'articleManList',
                title: '文章管理',
                roleTypes: 'back:articleBase:list'
            }, {
                index: 'authorList',
                title: '作者管理',
                roleTypes: 'back:authorBase:list'
            }, {
                index: 'publishersList',
                title: '出版方管理',
                roleTypes: 'back:publisherBase:list'
            }, {
                index: 'bookMegList',
                title: '书籍管理',
                roleTypes: 'back:booksBase:list'
            }]
        }, {
            label: "作品管理",
            index: `${Date.now()}`,
            roleTypes: 'back:projectSetBase',
            subs: [{
                index: 'sampleReelsList',
                title: '作品集管理',
                roleTypes: 'back:projectSetBase:list'
            }, {
                index: 'sampleReelsBaseList',
                title: '作品管理',
                roleTypes: 'back:projectsBase:list'
            },
            {
                index: 'course',
                title: '课程',
                roleTypes: 'back:courseBase:list',
            }
            ]
        }],
    },
    // 应用管理
    {
        icon: 'el-icon-date',
        index: Math.random() + '',
        title: '应用管理',
        roleTypes: 'back:application',
        subList: [{
            label: "系统参数",
            index: `${Date.now()}`,
            roleTypes: 'back:sysArticle',
            subs: [{
                index: 'systemArticleList',
                title: '系统文章',
                roleTypes: 'back:sysArticle:list'
            }, {
                index: 'systemParameterList',
                title: '系统参数',
                roleTypes: 'back:sysParams:list'
            }]
        },
        {
            label: "APP管理",
            index: `${Date.now()}`,
            roleTypes: 'back:platform',
            subs: [{
                index: 'appManagementList',
                title: 'APP管理',
                roleTypes: 'back:platform:list'
            }]
        },

        ]
    },
    // 会员卡管理

    {
        icon: 'el-icon-date',
        index: Math.random() + '',
        title: '商品管理',
        roleTypes: 'back:memberCardSpu',
        subList: [
            {
                index: `${Date.now()}`,
                label: '商品管理',
                roleTypes: 'back:memberCardSpu:list',
                subs: [{
                    index: 'memberSpuList',
                    title: 'SPU管理',
                    roleTypes: 'back:memberCardSpu:list'
                },
                {
                    index: 'memberSkuList',
                    title: 'SKU管理',
                    roleTypes: 'back:memberCardSku:list'
                }
                ]
            },
        ]
    },
    // vipTag, orderTag, financeTag
]

export default router_config;