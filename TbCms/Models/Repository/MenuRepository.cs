using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TbCms.Models.Repository
{
    /// <summary>
    /// メニューリポジトリ
    /// </summary>
    public class MenuRepository : IMenuRepository
    {

        private TbCmsContext db = new TbCmsContext();

        /// <summary>
        /// メニューボタン取得
        /// </summary>
        /// <returns></returns>
        public MenuViewModel GetListData(object isAdministrator, object isCreateNews, object isCreateContents)
        {
            MenuViewModel retModel = new MenuViewModel();

            //各メニュー表示判定フラグ初期化
            retModel.IsMaster = false;
            retModel.IsNews = false;
            retModel.IsContaints = false;

            
            if (isAdministrator != null && isCreateNews != null && isCreateContents != null)
            {
                //表示設定
                if (isAdministrator.Equals(true))
                {
                    //マスタメンテメニューを表示
                    retModel.IsMaster = true;
                    //記事メニューを表示
                    retModel.IsNews = true;
                    //コンテンツメニューを表示
                    retModel.IsContaints = true;
                }

                if (isCreateNews.Equals(true))
                {
                    //記事メニューを表示
                    retModel.IsNews = true;
                }

                if (isCreateContents.Equals(true))
                {
                    //コンテンツメニューを表示
                    retModel.IsContaints = true;
                }
            }

            // 条件を後にするため必要なSELECTのみ実行.
            var list = db.m_menus
                .OrderBy(a => a.view_order)
                .Select(
                    a => new MenuTableViewModel
                    {
                        menu_title = a.menu_view_name,
                        menu_controller = a.taget_controller,
                        menu_action = a.target_action,
                        menu_kind = a.menu_kind,
                    }
                    )
            ;

            //マスタメンテメニュー項目を取得
            var masterList = list.Where(a => a.menu_kind.Contains("10"));
            //記事メニュー項目を取得
            var newsList = list.Where(a => a.menu_kind.Contains("20"));
            //コンテンツメニュー項目を取得
            var contentsList = list.Where(a => a.menu_kind.Contains("30"));

            retModel.MasterMenuList = masterList.ToArray();
            retModel.NewsMenuList = newsList.ToArray();
            retModel.ContentsMenuList = contentsList.ToArray();

            return retModel;
        }

    }
}