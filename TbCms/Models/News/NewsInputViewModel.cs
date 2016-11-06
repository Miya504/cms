using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Models {
    public class NewsInputViewModel {
        /// <summary>
        /// 記事ID
        /// </summary>
        public int news_id { get; set; }

        /// <summary>
        /// 記事名.
        /// </summary>
        [Required(ErrorMessage = "{0}は必須です。")]
        [StringLength(50, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "記事名")]
        public int news_name { get; set; }

        /// <summary>
        /// タイトル.
        /// </summary>
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "記事タイトル")]
        public int news_title { get; set; }

        /// <summary>
        /// ページ説明.
        /// </summary>
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "ページ説明")]
        public int page_description { get; set; }

        /// <summary>
        /// キーワード.
        /// </summary>
        [StringLength(255, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "キーワード")]
        public int keyword { get; set; }

        /// <summary>
        /// 説明文.
        /// </summary>
        [Display(Name = "説明文")]
        public int description { get; set; }

        /// <summary>
        /// 大見出し.
        /// </summary>
        [StringLength(50, ErrorMessage = "{0}は{1}文字以内で入力してください。")]
        [Display(Name = "大見出し")]
        public int news_header { get; set; }

        /// <summary>
        /// 本文.
        /// </summary>
        [Display(Name = "本文")]
        public int news_text { get; set; }

        /// <summary>
        /// [ラジオボタン]公開設定.
        /// </summary>
        [Display(Name = "公開設定")]
        public int open_kind { get; set; }

        /// <summary>
        /// 公開開始日.
        /// </summary>
        [Display(Name = "公開開始日")]
        [DataType(DataType.Date, ErrorMessage = "{0}は日付で入力してください。")]
        public int open_start { get; set; }

        /// <summary>
        /// 公開終了日.
        /// </summary>
        [Display(Name = "公開終了日")]
        [DataType(DataType.Date, ErrorMessage = "{0}は日付で入力してください。")]
        public int open_end { get; set; }

        /// <summary>
        /// [ラジオボタン]削除状態
        /// </summary>
        [Display(Name = "削除状態")]
        public int delete_state { get; set; }
    }
}