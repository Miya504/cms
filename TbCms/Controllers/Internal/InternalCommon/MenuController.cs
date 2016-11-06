using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TbCms.Controllers.Internal.InternalCommon
{
    public class MenuController : Controller
    {
        /*
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
        */

        /// <summary>
        /// メニュー(初回).
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Menu()
        {
            // セッションの参照.
            object isAdministrator = Session["IsAdministrator"];

            return View();
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