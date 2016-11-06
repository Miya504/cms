using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.KeyWord
{
    public class KeyWordInputViewModel
    {
        /// <summary>
        /// キーワードID.
        /// </summary>
        [Display(Name = "キーワードID")]
        public int keyword_id { get; set; }

        /// <summary>
        /// タグ内容.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "タグ内容")]
        public String tag_text { get; set; }

        /// <summary>
        /// 説明.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "説明")]
        public byte description { get; set; }

        /// <summary>
        /// 削除状態.
        /// </summary>
        [Display(Name = "削除状態")]
        public string delete_state { get; set; }

        /// <summary>
        /// 更新機能ID.
        /// </summary>
        [Display(Name = "更新機能ID")]
        public int update_function { get; set; }

        /// <summary>
        /// 更新日時.
        /// </summary>
        [Display(Name = "更新日時")]
        public DateTime update_date_time { get; set; }

        /// <summary>
        /// 更新したシステムユーザID.
        /// </summary>
        [Display(Name = "更新したシステムユーザID")]
        public int update_system_user { get; set; }

        /// <summary>
        /// 削除機能ID.
        /// </summary>
        [Display(Name = "削除機能ID")]
        public int delete_function { get; set; }

        /// <summary>
        /// 削除日時.
        /// </summary>
        [Display(Name = "削除日時")]
        public DateTime delete_date_time { get; set; }

        /// <summary>
        /// 削除したシステムユーザID.
        /// </summary>
        [Display(Name = "削除したシステムユーザID")]
        public int delete_system_user { get; set; }
    }
}