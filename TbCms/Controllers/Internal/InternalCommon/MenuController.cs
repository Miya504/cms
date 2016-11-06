using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TbCms.Controllers.Internal.Master;
using TbCms.Models;
using TbCms.Models.Repository;

namespace TbCms.Controllers.Internal.InternalCommon
{
    public class MenuController : Controller
    {

        /// <summary>
        /// リポジトリクラス.
        /// </summary>
        private IMenuRepository _rep;

        /// <summary>
        /// コンストラクタ.
        /// </summary>
        public MenuController() : this(new MenuRepository()) { }

        /// <summary>
        /// 第2コンストラクタ.
        /// </summary>
        /// <param name="rep"></param>
        public MenuController(IMenuRepository rep)
        {
            // リポジトリクラスを紐づける.
            _rep = rep;
        }

        /// <summary>
        /// メニュー表示.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Menu()
        {

            // セッションの参照.
            object isAdministrator = Session["IsAdministrator"];
            object isCreateNews = Session["IsCreateNews"];
            object isCreateContents = Session["IsCreateContents"];

            return View(_rep.GetListData(isAdministrator, isCreateNews, isCreateContents));
        }


        /// <summary>
        /// メニューボタンクリック時の画面遷移
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult ChangeView(string menu_controller, string menu_action)
        {
            //一覧画面
            if (!menu_action.Equals("Input"))
            {
                return Redirect("../" + menu_controller + "/" + menu_action);
            }
            else
            //入力画面
            {
                return Redirect("../" + menu_controller + "/New?id=0");
            }
        }

        /// <summary>
        /// ログアウト.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Logout()
        {
            //セッション状態の値を削除.
            Session.RemoveAll();

            return Redirect("../Login/Login");
        }
    }
}