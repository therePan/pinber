import React from 'react'
import style from './style.less'

class Protocal extends React.Component {
  render() {
    return (
      <div className={style.protocol}>
        <p className={style.title}>聘呗软件许可与服务协议</p>
        <p className={style.one}>首部及导言</p>
        <p className={style.child}>
          为使用聘呗软件（以下统称“本软件”）及服务，您请您务必审慎阅读、充分理解各条款内容，
        特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示您注意。
        除非您已阅读并接受本协议所有条款，否则您无权下载、安装或使用本软件及相关服务。
        您的下载、安装、使用、登录等行为即视为您已阅读并同意本协议的约束。
        </p>
        <p className={style.one}>一、协议的范围</p>
        <p className={style.child}>本协议是您与聘呗间关于您下载、安装、使用、登录本软件，以及使用本服务所订立的协议。
        本协议与上述内容存在冲突的，以本协议为准。</p>
        <p className={style.one}>二、关于本服务</p>
        <p className={style.two}>2.1 本服务内容</p>
        <p className={style.child}>本服务内容是指聘呗通过本软件向用户提供的相关服务（简称“本服务”）。</p>
        <p className={style.two}>2.2 本服务形式</p>
        <p className={style.child}>
          您可能可以通过电脑、手机等终端以客户端、网页等形式使用本服务，具体以聘呗提供的为准，同时，
        聘呗会不断丰富您使用本服务的终端、形式等。当您使用本服务时，您应选择与您的终端、系统等相匹配的本软件版本，
        否则，您可能无法正常使用本服务。</p>
        <p className={style.two}>2.3 许可的范围</p>
        <p className={style.child}>2.3.1 聘呗给予您一项个人的、不可转让及非排他性的许可，以使用本软件。
        您可以为非商业目的在单一台终端设备上下载、安装、使用、登录本软件。</p>
        <p className={style.child}>2.3.2 您可以制作本软件的一个副本，仅用作备份。备份副本必须包含原软件中含有的所有著作权信息。</p>
        <p className={style.child}>2.3.3 本条及本协议其他条款未明示授权的其他一切权利仍由聘呗保留，
        您在行使这些权利时须另外取得聘呗的书面许可。聘呗如果未行使前述任何权利，并不构成对该权利的放弃。</p>
        <p className={style.one}>三、聘呗账号</p>
        <p className={style.child}>使用本软件您需要注册聘呗账号</p>
        <p className={style.one}>四、软件的获取</p>
        <p className={style.child}>4.1 您可以直接从聘呗的网站上获取本软件，也可以从得到聘呗授权的第三方获取。</p>
        <p className={style.child}>4.2 如果您从未经聘呗授权的第三方获取本软件或与本软件名称相同的安装程序，聘呗无法保证该软件能够正常使用，
        并对因此给您造成的损失不予负责。</p>
        <p className={style.one}>五、软件的安装与卸载</p>
        <p className={style.child}>5.1 聘呗可能为不同的终端、系统等开发了不同的软件版本，
        您应当根据实际情况选择下载合适的版本进行安装。</p>
        <p className={style.child}>5.2 下载安装程序后，您需要按照该程序提示的步骤正确安装。</p>
        <p className={style.child}>5.3 为提供更加优质、安全的服务，在本软件安装时聘呗可能推荐您安装其他软件，您可以选择安装或不安装。</p>
        <p className={style.child}>5.4 如果您不再需要使用本软件或者需要安装新版软件，可以自行卸载。如果您愿意帮助聘呗改进产品服务，
        请告知卸载的原因。</p>
        <p className={style.one}>六、软件的更新</p>
        <p className={style.child}>6.1 为了增进用户体验、完善服务内容，聘呗将不断努力开发新的服务，并为您不时提供软件更新
        （这些更新可能会采取软件替换、修改、功能强化、版本升级等形式）。</p>
        <p className={style.child}>6.2 本软件可能为您默认开启自动升级、更新等功能，您可以在软件设置中自行选择是否需要开启此功能。</p>
        <p className={style.child}>6.3 为了改善用户体验，并保证服务的安全性和功能的一致性，聘呗有权不经向您特别通知而对软件进行更新，
        或者对软件的部分功能效果进行改变或限制</p>
        <p className={style.child}>6.4 本软件新版本发布后，旧版本的软件可能无法使用。聘呗不保证旧版本软件继续可用及相应的客户服务，
        请您随时核对并下载最新版本。</p>
        <p className={style.one}>七、用户个人信息保护</p>
        <p className={style.child}>7.1 保护用户个人信息是聘呗的一项基本原则，聘呗将会采取合理的措施保护用户的个人信息。
        除法律法规规定的情形外，未经用户许可聘呗不会向第三方公开、透露用户个人信息。聘呗对相关信息采用专业加密存储与传输方式，
        保障用户个人信息的安全。</p>
        <p className={style.child}>7.2 您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规或政策有特殊规定的，
        您需要填写真实的身份信息。若您填写的信息不完整，则无法使用本服务或在使用过程中受到限制。</p>
        <p className={style.child}>7.3 一般情况下，您可随时浏览、修改自己提交的信息，但出于安全性和身份识别的考虑，
        您可能无法修改注册时提供的初始注册信息及其他验证信息。</p>
        <p className={style.child}>7.4 聘呗将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、
        使用或披露。</p>
        <p className={style.one}>八、用户行为规范</p>
        <p className={style.two}>8.1 用户注意事项</p>
        <p className={style.child}>8.1.1 您充分理解并同意：您在使用本服务某一特定服务时，本服务可以能需要使用您终端设备的相关权限、
        接口及相关设备信息等以才能实现相应的功能，某些特定服务可能还需同意单独的协议、规则等，您在使用该项服务前请仔细阅读前述相关协议、
        规则。</p>
        <p className={style.child}>8.1.2 聘呗有权在本服务中或通过本服务向您展现各种信息，包括但不限于广告信息、新闻信息及宣传信息等，
        该信息可能以系统消息或弹出窗口等形式出现。</p>
        <p className={style.child}>8.1.3 您可以选择不向聘呗提供您的某些信息，或者根据产品设置取消聘呗收集某些信息，
        但因此可能会导致相关服务功能无法实现。</p>
        <p className={style.child}>8.1.4 您理解并同意：聘呗将会尽其商业上的合理努力保障您在本软件及服务中的数据存储安全，但是，
        聘呗并不能就此提供完全保证，包括但不限于以下情形</p>
        <p className={style.child_node}>（1）聘呗不对您在本软件及服务中相关数据的删除或储存失败负责；<br />（2）聘呗有权根据实
        际情况自行决定您在本软件及服务中数据
        的最长储存期限、服务器中数据的最大存储空间等，
        您可根据自己的需要自行备份本软件及服务中的相关数据。双方另有约定的按相应约定执行；<br />（3）如果您
        停止使用本软件及服务或服务被终止或取消，聘呗可以从服务器上永久地删除您的数据。您的服务停止、终止或取消后，
        聘呗没有义务向您返还任何数据。
        </p>
        <p className={style.child}>8.1.5 本软件内的运营活动均由聘呗，除有特别声明外，活动中提供的奖品生产商
        （如奖品为苹果手机的苹果公司，下同）等均未参与本软件内的运营活动，活动中涉及到的奖品，也均由聘呗自行购买。因运营活动产生纠纷的，
        由聘呗在法律规定的范围内承担责任，与奖品生产商无关。因活动奖品质量产生纠纷的,按照相关法律规定处理。</p>
        <p className={style.child}>8.1.6 您使用本服务时，本服务的内容可能会因您使用软件版本的不同而有差别，您理解并同意：</p>
        <p className={style.child_node}>（1）当您在使用本软件的某些版本开通或进入聘呗开发的应用分发类产品或应用分发类功能的相关页面时，
        此应用分发类产品或功能，为更好地向您提供终端设备上应用的升级提示等智能服务，可能会使用您终端设备上已经安装应用程序的版本信息、
        安装位置、大小等必要信息，具体以聘呗实际提供的版本为准。</p>
        <p className={style.two}>8.2 五不准</p>
        <p className={style.child}>您在使用本服务时不得利用本服务从事以下行为，包括但不限于：</p>
        <p className={style.child_node}>（1）发布、传送、传播、储存违反中国法律、危害国家安全统一、社会稳定、公序良俗、
        社会公德以及侮辱、诽谤、色情、暴力的内容；<br />
          （2）发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；<br />
          （3）虚构事实、隐瞒真相以误导、欺骗他人；<br />
          （4）发表、传送、传播广告信息及垃圾信息；<br />
          （5）从事其他违反法律法规、政策及公序良俗、社会公德等的行为。
        </p>
        <p className={style.two}>8.3 用户禁止行为</p>
        <p className={style.child}>除非法律允许或聘呗书面许可，您不得从事下列行为：</p>
        <p className={style.child_node}>（1）删除本软件及其副本上关于著作权的信息；<br />
          （2）对本软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本软件的源代码；<br />
          （3）对聘呗拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；<br />
          （4）对本软件或者本软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，
          以及本软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、
          外挂或非聘呗经授权的第三方工具/服务接入本软件和相关系统；<br />
          （5）通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、
          方法进行运营或向公众传播，无论这些行为是否为商业目的；<br />
          （6）通过非聘呗开发、授权的第三方软件、插件、外挂、系统，登录或使用聘呗软件及服务，或制作、发布、传播上述工具；<br />
          （7）自行、授权他人或利用第三方软件对本软件及其组件、模块、数据等进行干扰；<br />
          （8）其他未经聘呗明示授权的行为。
        </p>
        <p className={style.two}>8.4 对自己行为负责</p>
        <p className={style.child}>您充分了解并同意，您必须为自己注册帐号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。
        您应对使用本服务时接触到的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、
        完整性或实用性的依赖而产生的风险。聘呗无法且不会对您因前述风险而导致的任何损失或损害承担责任。</p>
        <p className={style.two}>8.5 违约处理</p>
        <p className={style.child}>如果聘呗发现或收到他人举报您有违反本协议约定的，聘呗有权不经通知随时对相关内容进行删除、屏蔽，
        并采取包括但不限于暂停、终止您使用相应聘呗账号，暂停、终止您使用部分或全部本服务，追究法律责任等措施。</p>
        <p className={style.two}>8.6 对第三方损害的处理</p>
        <p className={style.child}>您违反约定，导致任何第三方损害的，您应当独立承担责任；聘呗因此遭受损失的，您也应当一并赔偿。</p>
        <p className={style.one}>九、第三方提供的产品或服务</p>
        <p className={style.child}>您在聘呗平台上使用第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。
        聘呗和第三方对可能出现的纠纷在法律规定和约定的范围内各自承担责任。
因用户使用本软件或要求聘呗提供特定服务时，本软件可能会调用第三方系统或者通过第三方支持用户的使用或访问，
使用或访问的结果由该第三方提供（包括但不限于您通过本服务跳转到的第三方提供的服务及内容，第三方通过聘呗开放平台接入的服务及内容等），
聘呗无法保证第三方提供服务及内容的安全性、准确性、有效性及其他不确定的风险，您应自行承担相关责任。
        </p>
        <p className={style.one}>十、知识产权声明</p>
        <p className={style.child}>10.1 聘呗是本软件的知识产权权利人。本软件的著作权、商标权、专利权、商业秘密等知识产权，
        以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）
        均受中华人民共和国法律法规和相应的国际条约保护，聘呗依法享有上述相关知识产权，但相关权利人依照法律规定应享有的权利除外。</p>
        <p className={style.child}>10.2 未经聘呗或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方实施、利用、
        转让上述知识产权。</p>
        <p className={style.one}>十一、终端安全责任</p>
        <p className={style.child}>11.1 您理解并同意，本软件或本服务同大多数互联网软件、服务一样，可能会受多种因素影响（
        包括但不限于用户原因、网络服务质量、社会环境等）；也可能会受各种安全问题的侵扰（包括但不限于他人非法利用用户资料，
        进行现实中的骚扰；用户下载安装的其他软件或访问的其他网站中可能含有病毒、木马程序或其他恶意程序，威胁您终端的信息和数据的安全，
        继而影响本软件、本服务的正常使用等）。因此，您应加强信息安全及个人信息的保护意识，注意密码保护，以免遭受损失。</p>
        <p className={style.child}>11.2 您不得制作、发布、使用、传播用于窃取聘呗账号及他人个人信息、财产的恶意程序。</p>
        <p className={style.child}>11.3 维护软件安全与正常使用是聘呗和您的共同责任，聘呗将按照行业标准合理审慎地采取必要技术措施保
        护您的终端信息和数据安全，但是您承认和同意聘呗不能就此提供任何保证。</p>
        <p className={style.child}>11.4 在任何情况下，您不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，
        请一定先核实对方身份，并请经常留意聘呗有关防范诈骗犯罪的提示。</p>
        <p className={style.one}>十二、第三方软件或技术</p>
        <p className={style.child}>12.1 本软件可能会使用第三方软件或技术（包括本软件可能使用的开源代码和公共领域代码等，下同），
        这种使用已经获得合法授权。</p>
        <p className={style.child}>12.2 本软件如果使用了第三方的软件或技术，聘呗将按照相关法规或约定，对相关的协议或其他文件，
        可能通过本协议附件、在本软件安装包特定文件夹中打包等形式进行展示，它们可能会以“软件使用许可协议”、“授权协议”、
        “开源代码许可证”或其他形式来表达。前述通过各种形式展现的相关协议或其他文件，均是本协议不可分割的组成部分，
        与本协议具有同等的法律效力，您应当遵守这些要求。如果您没有遵守这些要求，该第三方或者国家机关可能会对您提起诉讼、
        罚款或采取其他制裁措施，并要求聘呗给予协助，您应当自行承担法律责任。</p>
        <p className={style.one}>十三、其他</p>
        <p className={style.child}>13.1 您使用本软件或本服务即视为您已阅读并同意受本协议的约束。聘呗有权在必要时修改本协议条款。
        您可以在本软件、本服务的最新版本中查阅相关协议条款。本协议条款变更后，如果您继续使用本软件、本服务，
        即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本软件。</p>
        <p className={style.child}>13.2 本协议签订地为中华人民共和国浙江省杭州市西湖区。</p>
        <p className={style.child}>13.3 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。</p>
        <p className={style.child}>13.4 若您和聘呗之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争
        议提交本协议签订地有管辖权的人民法院管辖。</p>
        <p className={style.child}>13.5 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</p>
        <p className={style.child}>13.6 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</p>
        <p className={style.child}>13.7 若本协议有中文、英文等多个语言版本，相应内容不一致的，均以中文版的内容为准。</p>
      </div>
    )
  }
}

export default Protocal