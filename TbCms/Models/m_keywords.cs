//------------------------------------------------------------------------------
// <auto-generated>
//     このコードはテンプレートから生成されました。
//
//     このファイルを手動で変更すると、アプリケーションで予期しない動作が発生する可能性があります。
//     このファイルに対する手動の変更は、コードが再生成されると上書きされます。
// </auto-generated>
//------------------------------------------------------------------------------

namespace TbCms.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class m_keywords
    {
        public short keyword_id { get; set; }
        public string tag_text { get; set; }
        public string description { get; set; }
        public string delete_state { get; set; }
        public string create_function { get; set; }
        public System.DateTime create_date_time { get; set; }
        public string create_user { get; set; }
        public string update_function { get; set; }
        public Nullable<System.DateTime> update_date_time { get; set; }
        public string update_system_user { get; set; }
        public string delete_function { get; set; }
        public Nullable<System.DateTime> delete_date_time { get; set; }
        public string delete_system_user { get; set; }
    }
}
