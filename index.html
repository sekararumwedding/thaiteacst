<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kasir Thai Tea CST</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #E67E22;
            --primary-dark: #D35400;
            --secondary: #F39C12;
            --dark: #2C3E50;
            --light: #FDF2E9;
            --white: #FFFFFF;
            --gray: #95A5A6;
            --success: #27AE60;
            --danger: #E74C3C;
            --shadow: 0 4px 20px rgba(0,0,0,0.15);
            --radius: 16px;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        
        body {
            background: linear-gradient(135deg, #FFF8F0 0%, #FFEBE0 100%);
            color: var(--dark);
            min-height: 100vh;
            padding: 20px;
        }
        
        .app-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 400px;
            gap: 25px;
        }
        
        header {
            grid-column: 1 / -1;
            background: var(--white);
            border-radius: var(--radius);
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: var(--shadow);
            margin-bottom: 10px;
            position: sticky;
            top: 10px;
            z-index: 100;
        }
        
        .logo { display: flex; align-items: center; gap: 15px; }
        .logo-icon {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            width: 50px; height: 50px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 1.5rem; font-weight: bold;
        }
        .logo-text h1 { font-size: 1.8rem; color: var(--primary-dark); font-weight: 800; }
        .logo-text p { color: var(--gray); font-size: 0.9rem; }
        
        .header-actions { display: flex; align-items: center; gap: 15px; }
        
        .btn {
            padding: 12px 24px; border: none; border-radius: 12px; font-weight: 600;
            cursor: pointer; display: flex; align-items: center; gap: 8px;
            transition: all 0.3s; font-size: 0.95rem;
        }
        .btn-primary { background: var(--primary); color: white; }
        .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(230, 126, 34, 0.4); }
        .btn-outline { background: transparent; border: 2px solid var(--primary); color: var(--primary); }
        .btn-outline:hover { background: var(--primary); color: white; }
        .btn-danger { background: var(--danger); color: white; }
        .btn-danger:hover { background: #c0392b; }
        .btn-success { background: var(--success); color: white; }
        .btn-success:hover { background: #219653; }
        .btn-warning { background: var(--secondary); color: white; }
        .btn-warning:hover { background: #E67E22; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .btn-sm { padding: 6px 12px; font-size: 0.85rem; }
        
        .menu-section {
            background: var(--white); border-radius: var(--radius); padding: 25px;
            box-shadow: var(--shadow); height: fit-content;
        }
        .section-title {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid var(--light);
        }
        .section-title h2 { font-size: 1.6rem; color: var(--dark); display: flex; align-items: center; gap: 10px; }
        
        .category-filter { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 25px; }
        .category-btn {
            padding: 8px 20px; background: var(--light); border: none; border-radius: 30px;
            font-weight: 500; cursor: pointer; transition: all 0.3s;
        }
        .category-btn.active, .category-btn:hover { background: var(--primary); color: white; }
        
        .products-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;
        }
        .product-card {
            background: var(--white); border-radius: 16px; overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: transform 0.3s;
            display: flex; flex-direction: column; border: 2px solid transparent;
        }
        .product-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 8px 25px rgba(230, 126, 34, 0.25); }
        .product-img {
            height: 140px; background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
            display: flex; align-items: center; justify-content: center; font-size: 3rem; color: var(--primary);
        }
        .product-info { padding: 15px; flex-grow: 1; display: flex; flex-direction: column; }
        .product-name { font-weight: 600; font-size: 1.1rem; margin-bottom: 5px; color: var(--dark); }
        .product-desc { color: var(--gray); font-size: 0.85rem; margin-bottom: 10px; flex-grow: 1; }
        .product-price { font-weight: 700; font-size: 1.3rem; color: var(--primary-dark); margin: 8px 0; }
        .add-to-cart {
            width: 100%; padding: 10px; background: var(--primary); color: white; border: none;
            border-radius: 10px; font-weight: 600; cursor: pointer; display: flex; align-items: center;
            justify-content: center; gap: 8px; transition: background 0.3s; margin-top: 5px;
        }
        .add-to-cart:hover { background: var(--primary-dark); }
        
        .cart-section {
            background: var(--white); border-radius: var(--radius); padding: 25px;
            box-shadow: var(--shadow); display: flex; flex-direction: column;
            height: fit-content; position: sticky; top: 100px;
            max-height: calc(100vh - 120px); overflow-y: auto;
        }
        .cart-items { flex-grow: 1; margin-bottom: 20px; max-height: 400px; overflow-y: auto; padding-right: 5px; }
        .cart-item { display: flex; gap: 15px; padding: 15px 0; border-bottom: 1px solid var(--light); }
        .cart-item-img {
            width: 60px; height: 60px; background: var(--light); border-radius: 12px;
            display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--primary); flex-shrink: 0;
        }
        .cart-item-info { flex-grow: 1; }
        .cart-item-name { font-weight: 600; margin-bottom: 3px; }
        .cart-item-price { color: var(--primary-dark); font-weight: 600; }
        .cart-item-quantity { display: flex; align-items: center; gap: 10px; margin-top: 8px; }
        .quantity-btn {
            width: 28px; height: 28px; border-radius: 8px; background: var(--light); border: none;
            font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .quantity-btn:hover { background: var(--primary); color: white; }
        .remove-item {
            color: var(--danger); background: none; border: none; cursor: pointer; font-size: 1.1rem;
            width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .remove-item:hover { background: rgba(231, 76, 60, 0.1); }
        
        .cart-summary { border-top: 2px solid var(--light); padding-top: 20px; }
        .summary-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 0.95rem; }
        .summary-row.total {
            font-size: 1.4rem; font-weight: 700; color: var(--primary-dark);
            margin: 15px 0; padding-top: 15px; border-top: 2px dashed var(--light);
        }
        .summary-row.cash-input-row {
            background: #E8F8F5; padding: 10px; border-radius: 8px; margin: 10px 0; border: 1px solid #A2D9CE;
        }
        .summary-row.cash-input-row label { font-weight: 600; color: var(--success); display: block; margin-bottom: 5px; }
        .summary-row.cash-input-row input {
            width: 100%; padding: 8px; border: 1px solid #A2D9CE; border-radius: 6px; font-weight: bold; font-size: 1.1rem;
        }
        .summary-row.change-row { color: var(--success); font-weight: 700; font-size: 1.1rem; }
        
        .payment-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
        .payment-method {
            padding: 15px; border: 2px solid var(--light); border-radius: 12px; text-align: center;
            cursor: pointer; transition: all 0.3s; background: var(--white);
        }
        .payment-method:hover, .payment-method.selected { border-color: var(--primary); background: rgba(230, 126, 34, 0.08); }
        .payment-method i { font-size: 1.8rem; margin-bottom: 8px; color: var(--primary); }
        .payment-method.cash i { color: #27AE60; }
        .payment-method.qris i { color: #3498DB; }
        .payment-method.transfer i { color: #9B59B6; }
        .payment-method.selected i { color: var(--primary-dark); }
        .payment-method.selected.cash i { color: #219653; }
        .payment-method.selected.qris i { color: #2980B9; }
        .payment-method.selected.transfer i { color: #8E44AD; }
        
        .checkout-btn { width: 100%; padding: 16px; font-size: 1.1rem; margin-top: 10px; }
        
        .empty-cart { text-align: center; padding: 40px 20px; color: var(--gray); }
        .empty-cart i { font-size: 3rem; margin-bottom: 15px; opacity: 0.7; }
        
        /* Modal Styles */
        .modal {
            display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); z-index: 1000; align-items: center; justify-content: center; padding: 20px;
        }
        .modal.active { display: flex; }
        .modal-content {
            background: white; width: 100%; max-width: 900px; border-radius: 20px;
            padding: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position: relative;
            max-height: 90vh; overflow-y: auto;
        }
        .close-modal {
            position: absolute; top: 15px; right: 20px; background: none; border: none;
            font-size: 1.5rem; color: var(--gray); cursor: pointer; width: 36px; height: 36px;
            border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .close-modal:hover { background: var(--light); color: var(--danger); }
        
        /* Receipt Modal */
        .receipt {
            background: white; width: 100%; max-width: 400px; border-radius: 20px;
            padding: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); position: relative;
        }
        .receipt-header { text-align: center; border-bottom: 2px dashed #eee; padding-bottom: 20px; margin-bottom: 20px; }
        .receipt-logo { font-size: 2.5rem; color: var(--primary); margin-bottom: 10px; font-weight: 800; }
        .receipt-title { font-size: 1.4rem; font-weight: 700; color: var(--dark); margin: 5px 0; }
        .receipt-meta { color: var(--gray); font-size: 0.9rem; margin-top: 5px; line-height: 1.6; }
        .receipt-items { margin-bottom: 20px; }
        .receipt-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #eee; }
        .receipt-item-name { font-weight: 500; }
        .receipt-item-qty { color: var(--gray); margin-left: 5px; }
        .receipt-item-price { font-weight: 600; color: var(--primary-dark); }
        .receipt-summary { border-top: 2px dashed #eee; padding-top: 15px; margin-top: 10px; }
        .receipt-total { display: flex; justify-content: space-between; font-size: 1.5rem; font-weight: 700; color: var(--primary-dark); margin: 10px 0; }
        .receipt-footer { text-align: center; margin-top: 25px; padding-top: 15px; border-top: 2px dashed #eee; color: var(--gray); font-size: 0.9rem; }
        .receipt-actions { display: flex; gap: 10px; margin-top: 25px; }
        .receipt-actions .btn { flex: 1; justify-content: center; }
        
        /* Report Styles */
        .report-header {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 25px; flex-wrap: wrap; gap: 15px;
        }
        .report-title h2 { font-size: 1.8rem; color: var(--dark); margin-bottom: 5px; }
        .report-title p { color: var(--gray); }
        .report-filters { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
        .report-filters select, .report-filters input {
            padding: 10px 15px; border: 2px solid var(--light); border-radius: 10px;
            font-size: 0.95rem; background: white; cursor: pointer;
        }
        .report-filters select:focus, .report-filters input:focus {
            outline: none; border-color: var(--primary);
        }
        
        .stats-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px; margin-bottom: 30px;
        }
        .stat-card {
            background: linear-gradient(135deg, var(--light), #fff);
            padding: 20px; border-radius: 16px; border-left: 4px solid var(--primary);
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .stat-card.revenue { border-left-color: var(--success); }
        .stat-card.orders { border-left-color: var(--primary); }
        .stat-card.items { border-left-color: var(--secondary); }
        .stat-card.avg { border-left-color: #9B59B6; }
        
        .stat-label { font-size: 0.9rem; color: var(--gray); margin-bottom: 8px; }
        .stat-value { font-size: 1.8rem; font-weight: 700; color: var(--dark); }
        .stat-card.revenue .stat-value { color: var(--success); }
        .stat-card.orders .stat-value { color: var(--primary); }
        .stat-card.items .stat-value { color: var(--secondary); }
        
        .transactions-table {
            width: 100%; border-collapse: collapse; margin-top: 20px;
            background: white; border-radius: 12px; overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .transactions-table th, .transactions-table td {
            padding: 12px 15px; text-align: left; border-bottom: 1px solid var(--light);
        }
        .transactions-table th {
            background: var(--light); font-weight: 600; color: var(--dark);
            font-size: 0.9rem; text-transform: uppercase;
        }
        .transactions-table tr:hover { background: rgba(230, 126, 34, 0.05); }
        .transactions-table tr:last-child td { border-bottom: none; }
        .transaction-id { font-weight: 600; color: var(--primary); }
        .payment-badge {
            display: inline-block; padding: 4px 12px; border-radius: 20px;
            font-size: 0.85rem; font-weight: 500;
        }
        .payment-badge.cash { background: #D5F5E3; color: #27AE60; }
        .payment-badge.qris { background: #D6EAF8; color: #3498DB; }
        .payment-badge.transfer { background: #EBDEF0; color: #9B59B6; }
        .payment-badge.ewallet { background: #FDEBD0; color: #E67E22; }
        
        .empty-report {
            text-align: center; padding: 60px 20px; color: var(--gray);
        }
        .empty-report i { font-size: 4rem; margin-bottom: 20px; opacity: 0.5; }
        .empty-report h3 { margin-bottom: 10px; color: var(--dark); }
        
        .report-actions {
            display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end;
        }

        /* PRINT FIX CSS */
        @media print {
            @page { margin: 0; size: auto; }
            body { background: white; -webkit-print-color-adjust: exact; }
            
            /* Hide everything by default */
            .app-container, header, .cart-section, .modal, .menu-section, .report-header, .stats-grid, .transactions-table, .report-actions {
                display: none !important;
            }

            /* Show only receipt */
            .receipt {
                display: block !important;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                max-width: 100%;
                box-shadow: none;
                border-radius: 0;
                padding: 20px;
                margin: 0;
                visibility: visible !important;
            }
            
            /* Ensure modal background is gone */
            .modal.active {
                position: static;
                background: white;
                display: block !important;
                height: auto;
            }
            
            .receipt-actions, .close-modal {
                display: none !important;
            }
        }
        
        @media (max-width: 1100px) {
            .app-container { grid-template-columns: 1fr; }
            .cart-section { position: static; max-height: none; }
            header { flex-direction: column; gap: 15px; text-align: center; }
            .header-actions { width: 100%; justify-content: center; }
        }
        @media (max-width: 768px) {
            body { padding: 10px; }
            .products-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; }
            .product-img { height: 120px; font-size: 2.5rem; }
            .payment-methods { grid-template-columns: 1fr; }
            .receipt, .modal-content { padding: 20px; margin: 10px; }
            .stats-grid { grid-template-columns: 1fr; }
            .transactions-table { font-size: 0.85rem; }
            .transactions-table th, .transactions-table td { padding: 8px 10px; }
        }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .product-card, .cart-item, .stat-card { animation: fadeIn 0.3s ease-out; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--light); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary-dark); }
    </style>
</head>
<body>
    <div class="app-container">
        <header>
            <div class="logo">
                <div class="logo-icon">🧋</div>
                <div class="logo-text">
                    <h1>THAI TEA CST</h1>
                    <p>Sistem Kasir Digital</p>
                </div>
            </div>
            <div class="header-actions">
                <button class="btn btn-outline" id="newOrderBtn">
                    <i class="fas fa-plus"></i> Order Baru
                </button>
                <button class="btn btn-primary" id="viewReportBtn">
                    <i class="fas fa-chart-bar"></i> Laporan
                </button>
            </div>
        </header>
        
        <section class="menu-section">
            <div class="section-title">
                <h2><i class="fas fa-mug-hot"></i> Menu Thai Tea</h2>
                <span id="itemCount">0 item</span>
            </div>
            <div class="category-filter">
                <button class="category-btn active" data-category="all">Semua</button>
                <button class="category-btn" data-category="signature">Signature</button>
                <button class="category-btn" data-category="milk">Thai Milk Tea</button>
                <button class="category-btn" data-category="topping">Topping</button>
                <button class="category-btn" data-category="extra">Extra</button>
            </div>
            <div class="products-grid" id="productsGrid"></div>
        </section>
        
        <section class="cart-section">
            <div class="section-title">
                <h2><i class="fas fa-shopping-cart"></i> Keranjang</h2>
                <button class="btn btn-danger btn-sm" id="clearCartBtn">
                    <i class="fas fa-trash"></i> Hapus Semua
                </button>
            </div>
            <div class="cart-items" id="cartItems">
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Keranjang masih kosong</p>
                    <p style="font-size: 0.9rem; margin-top: 5px;">Pilih menu untuk menambahkan pesanan</p>
                </div>
            </div>
            <div class="cart-summary">
                <div class="summary-row"><span>Subtotal</span><span id="subtotal">Rp 0</span></div>
                <div class="summary-row"><span>PPN (11%)</span><span id="tax">Rp 0</span></div>
                <div class="summary-row"><span>Diskon</span><span id="discount">Rp 0</span></div>
                <div class="summary-row total"><span>Total</span><span id="total">Rp 0</span></div>
                
                <div style="margin: 20px 0; font-weight: 500;">
                    <i class="fas fa-credit-card"></i> Metode Pembayaran
                </div>
                <div class="payment-methods">
                    <div class="payment-method cash selected" data-method="cash">
                        <i class="fas fa-money-bill-wave"></i><div>Tunai</div>
                    </div>
                    <div class="payment-method qris" data-method="qris">
                        <i class="fas fa-qrcode"></i><div>QRIS</div>
                    </div>
                    <div class="payment-method transfer" data-method="transfer">
                        <i class="fas fa-exchange-alt"></i><div>Transfer</div>
                    </div>
                    <div class="payment-method" data-method="ewallet">
                        <i class="fas fa-wallet"></i><div>E-Wallet</div>
                    </div>
                </div>

                <!-- CASH INPUT SECTION (New) -->
                <div id="cashPaymentSection" style="display: block;">
                    <div class="summary-row cash-input-row">
                        <div style="width: 100%;">
                            <label for="cashInput"><i class="fas fa-money-bill"></i> Uang Diterima (Rp)</label>
                            <input type="number" id="cashInput" placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="summary-row change-row" id="changeRow" style="display: none;">
                        <span>Kembalian:</span>
                        <span id="changeAmount">Rp 0</span>
                    </div>
                </div>

                <button class="btn btn-success checkout-btn" id="checkoutBtn" disabled>
                    <i class="fas fa-cash-register"></i> Bayar Sekarang
                </button>
            </div>
        </section>
    </div>
    
    <!-- Receipt Modal -->
    <div class="modal" id="receiptModal">
        <div class="receipt">
            <button class="close-modal" id="closeReceiptModal">&times;</button>
            <div class="receipt-header">
                <div class="receipt-logo">🧋 CST</div>
                <div class="receipt-title">THAI TEA CST</div>
                <div class="receipt-meta">
                    Bandar Udara Internasional Soekarno–Hatta<br>
                    Jl. C3 No.831, Pajang, Kec. Benda, Kota Tangerang, Banten 15126<br>
                    📞 +62 822-9999-7227
                </div>
                <div class="receipt-meta" style="margin-top: 10px;" id="receiptDateTime"></div>
            </div>
            <div class="receipt-items" id="receiptItems"></div>
            <div class="receipt-summary">
                <div class="summary-row"><span>Subtotal</span><span id="receiptSubtotal">Rp 0</span></div>
                <div class="summary-row"><span>PPN (11%)</span><span id="receiptTax">Rp 0</span></div>
                <div class="summary-row"><span>Diskon</span><span id="receiptDiscount">Rp 0</span></div>
                <div class="receipt-total"><span>TOTAL</span><span id="receiptTotal">Rp 0</span></div>
                
                <!-- Cash Details in Receipt -->
                <div id="receiptCashDetails" style="margin-top: 10px; font-size: 0.9rem; color: var(--gray);">
                    <div class="summary-row"><span>Uang Diterima</span><span id="receiptCashPaid">Rp 0</span></div>
                    <div class="summary-row" style="color: var(--success); font-weight: bold;"><span>Kembalian</span><span id="receiptChange">Rp 0</span></div>
                </div>

                <div class="summary-row" style="margin-top: 10px; border-top: 1px dashed #eee; padding-top: 10px;"><span>Pembayaran</span><span id="receiptPaymentMethod">Tunai</span></div>
            </div>
            <div class="receipt-footer">
                <div style="margin: 15px 0; font-weight: 600;">Terima kasih telah berbelanja!</div>
                <div>Barang yang sudah dibeli tidak dapat ditukar/dikembalikan</div>
                <div style="margin-top: 10px; font-weight: 600;">Simpan struk ini sebagai bukti pembayaran</div>
                <div style="margin-top: 20px; font-size: 0.85rem; opacity: 0.8;">Powered by OnvmWeb Studio</div>
            </div>
            <div class="receipt-actions">
                <button class="btn btn-outline" id="printReceiptBtn"><i class="fas fa-print"></i> Cetak</button>
                <button class="btn btn-primary" id="newOrderFromReceiptBtn"><i class="fas fa-plus"></i> Order Baru</button>
            </div>
        </div>
    </div>
    
    <!-- Report Modal -->
    <div class="modal" id="reportModal">
        <div class="modal-content">
            <button class="close-modal" id="closeReportModal">&times;</button>
            
            <div class="report-header">
                <div class="report-title">
                    <h2><i class="fas fa-chart-bar"></i> Laporan Penjualan</h2>
                    <p>Thai Tea CST - Bandar Udara Soekarno-Hatta</p>
                </div>
                <div class="report-filters">
                    <select id="reportPeriod">
                        <option value="today">Hari Ini</option>
                        <option value="yesterday">Kemarin</option>
                        <option value="week">7 Hari Terakhir</option>
                        <option value="month">Bulan Ini</option>
                        <option value="all">Semua Waktu</option>
                    </select>
                    <button class="btn btn-primary btn-sm" id="generateReportBtn">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card revenue">
                    <div class="stat-label">Total Pendapatan</div>
                    <div class="stat-value" id="totalRevenue">Rp 0</div>
                </div>
                <div class="stat-card orders">
                    <div class="stat-label">Total Transaksi</div>
                    <div class="stat-value" id="totalOrders">0</div>
                </div>
                <div class="stat-card items">
                    <div class="stat-label">Total Item Terjual</div>
                    <div class="stat-value" id="totalItems">0</div>
                </div>
                <div class="stat-card avg">
                    <div class="stat-label">Rata-rata per Transaksi</div>
                    <div class="stat-value" id="avgTransaction">Rp 0</div>
                </div>
            </div>
            
            <div id="transactionsContainer">
                <h3 style="margin-bottom: 15px; color: var(--dark);">
                    <i class="fas fa-list"></i> Riwayat Transaksi
                </h3>
                <div id="transactionsList"></div>
            </div>
            
            <div class="report-actions">
                <button class="btn btn-danger btn-sm" id="clearAllDataBtn">
                    <i class="fas fa-trash-alt"></i> Hapus Semua Data
                </button>
                <button class="btn btn-warning btn-sm" id="exportReportBtn">
                    <i class="fas fa-download"></i> Export CSV
                </button>
                <button class="btn btn-primary btn-sm" id="printReportBtn">
                    <i class="fas fa-print"></i> Cetak Laporan
                </button>
            </div>
        </div>
    </div>

    <script>
        const products = [
            { id: 1, name: "Thai Tea Original", description: "Teh thailand klasik dengan susu kental manis", price: 15000, category: "signature", icon: "🧋" },
            { id: 2, name: "Thai Milk Tea", description: "Perpaduan teh thailand dan susu segar", price: 18000, category: "milk", icon: "🥛" },
            { id: 3, name: "Thai Tea Boba", description: "Thai tea original dengan topping boba kenyal", price: 22000, category: "topping", icon: "🍮" },
            { id: 4, name: "Thai Tea Jelly", description: "Thai tea dengan jelly buah segar", price: 20000, category: "topping", icon: "🍮" },
            { id: 5, name: "Thai Tea Less Sugar", description: "Thai tea dengan kadar gula 50%", price: 16000, category: "signature", icon: "🍃" },
            { id: 6, name: "Thai Tea Ice Blend", description: "Thai tea diblender dengan es krim vanilla", price: 25000, category: "signature", icon: "🍦" },
            { id: 7, name: "Extra Boba", description: "Tambahan boba mutiara hitam", price: 5000, category: "extra", icon: "⚫" },
            { id: 8, name: "Extra Jelly", description: "Tambahan jelly buah mix", price: 4000, category: "extra", icon: "🟡" },
            { id: 9, name: "Large Size", description: "Upgrade ke ukuran large (+200ml)", price: 3000, category: "extra", icon: "📏" },
            { id: 10, name: "Thai Tea Cream Cheese", description: "Thai tea dengan topping cream cheese", price: 24000, category: "milk", icon: "🧀" }
        ];

        let cart = JSON.parse(localStorage.getItem('thaiTeaCart')) || [];
        let transactions = JSON.parse(localStorage.getItem('thaiTeaTransactions')) || [];
        let selectedPaymentMethod = 'cash';
        let cashPaid = 0;

        const productsGrid = document.getElementById('productsGrid');
        const cartItems = document.getElementById('cartItems');
        const subtotalEl = document.getElementById('subtotal');
        const taxEl = document.getElementById('tax');
        const discountEl = document.getElementById('discount');
        const totalEl = document.getElementById('total');
        const itemCountEl = document.getElementById('itemCount');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const receiptModal = document.getElementById('receiptModal');
        const reportModal = document.getElementById('reportModal');
        const receiptItems = document.getElementById('receiptItems');
        const receiptSubtotal = document.getElementById('receiptSubtotal');
        const receiptTax = document.getElementById('receiptTax');
        const receiptDiscount = document.getElementById('receiptDiscount');
        const receiptTotal = document.getElementById('receiptTotal');
        const receiptPaymentMethod = document.getElementById('receiptPaymentMethod');
        const receiptDateTime = document.getElementById('receiptDateTime');
        const receiptCashDetails = document.getElementById('receiptCashDetails');
        const receiptCashPaid = document.getElementById('receiptCashPaid');
        const receiptChange = document.getElementById('receiptChange');
        const printReceiptBtn = document.getElementById('printReceiptBtn');
        const newOrderFromReceiptBtn = document.getElementById('newOrderFromReceiptBtn');
        const closeReceiptModal = document.getElementById('closeReceiptModal');
        const closeReportModal = document.getElementById('closeReportModal');
        const newOrderBtn = document.getElementById('newOrderBtn');
        const viewReportBtn = document.getElementById('viewReportBtn');
        const paymentMethods = document.querySelectorAll('.payment-method');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const reportPeriod = document.getElementById('reportPeriod');
        const generateReportBtn = document.getElementById('generateReportBtn');
        const clearAllDataBtn = document.getElementById('clearAllDataBtn');
        const exportReportBtn = document.getElementById('exportReportBtn');
        const printReportBtn = document.getElementById('printReportBtn');
        const cashInput = document.getElementById('cashInput');
        const cashPaymentSection = document.getElementById('cashPaymentSection');
        const changeRow = document.getElementById('changeRow');
        const changeAmount = document.getElementById('changeAmount');

        const formatRupiah = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
        
        const generateTransactionId = () => {
            const now = new Date();
            return `TRX${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}`;
        };

        const renderProducts = (category = 'all') => {
            productsGrid.innerHTML = '';
            const filtered = category === 'all' ? products : products.filter(p => p.category === category);
            filtered.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img">${product.icon}</div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-desc">${product.description}</div>
                        <div class="product-price">${formatRupiah(product.price)}</div>
                        <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Tambah</button>
                    </div>`;
                productsGrid.appendChild(card);
            });
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', e => addToCart(parseInt(e.currentTarget.dataset.id)));
            });
        };

        const addToCart = (productId) => {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            const existing = cart.find(item => item.id === productId);
            if (existing) existing.quantity++;
            else cart.push({ id: product.id, name: product.name, price: product.price, icon: product.icon, quantity: 1 });
            saveCart(); renderCart();
        };

        const updateQuantity = (productId, change) => {
            const item = cart.find(i => i.id === productId);
            if (!item) return;
            item.quantity += change;
            if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
            saveCart(); renderCart();
        };

        const removeItem = (productId) => {
            cart = cart.filter(i => i.id !== productId);
            saveCart(); renderCart();
        };

        const clearCart = () => {
            if (cart.length === 0 || confirm('Hapus semua item dari keranjang?')) {
                cart = []; saveCart(); renderCart();
                resetCashInput();
            }
        };

        const resetCashInput = () => {
            cashInput.value = '';
            cashPaid = 0;
            changeRow.style.display = 'none';
            updateCheckoutButton();
        };

        const saveCart = () => localStorage.setItem('thaiTeaCart', JSON.stringify(cart));
        const saveTransactions = () => localStorage.setItem('thaiTeaTransactions', JSON.stringify(transactions));

        const renderCart = () => {
            if (cart.length === 0) {
                cartItems.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Keranjang masih kosong</p><p style="font-size:0.9rem;margin-top:5px;">Pilih menu untuk menambahkan pesanan</p></div>`;
                checkoutBtn.disabled = true; itemCountEl.textContent = '0 item'; updateTotals(); return;
            }
            cartItems.innerHTML = ''; let totalItems = 0;
            cart.forEach(item => {
                totalItems += item.quantity;
                const el = document.createElement('div');
                el.className = 'cart-item';
                el.innerHTML = `
                    <div class="cart-item-img">${item.icon}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatRupiah(item.price)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>`;
                cartItems.appendChild(el);
            });
            document.querySelectorAll('.quantity-btn.decrease').forEach(btn => btn.addEventListener('click', e => updateQuantity(parseInt(e.currentTarget.dataset.id), -1)));
            document.querySelectorAll('.quantity-btn.increase').forEach(btn => btn.addEventListener('click', e => updateQuantity(parseInt(e.currentTarget.dataset.id), 1)));
            document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', e => removeItem(parseInt(e.currentTarget.dataset.id))));
            itemCountEl.textContent = `${totalItems} item${totalItems > 1 ? 's' : ''}`;
            updateCheckoutButton(); 
            updateTotals();
        };

        const updateTotals = () => {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.11;
            const discount = 0;
            const total = subtotal + tax - discount;
            subtotalEl.textContent = formatRupiah(subtotal);
            taxEl.textContent = formatRupiah(tax);
            discountEl.textContent = formatRupiah(discount);
            totalEl.textContent = formatRupiah(total);
            return { subtotal, tax, discount, total };
        };

        const updateCheckoutButton = () => {
            if (cart.length > 0) {
                // Check if cash is selected and input is valid
                if (selectedPaymentMethod === 'cash') {
                    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.11;
                    if (cashPaid >= total) {
                        checkoutBtn.disabled = false;
                        checkoutBtn.innerHTML = '<i class="fas fa-check"></i> Proses Pembayaran';
                    } else {
                        checkoutBtn.disabled = true;
                        checkoutBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Uang Kurang';
                    }
                } else {
                    checkoutBtn.disabled = false;
                    checkoutBtn.innerHTML = '<i class="fas fa-cash-register"></i> Bayar Sekarang';
                }
            } else {
                checkoutBtn.disabled = true;
            }
        };

        // Handle Cash Input
        cashInput.addEventListener('input', (e) => {
            const val = parseInt(e.target.value) || 0;
            cashPaid = val;
            const totals = updateTotals();
            
            if (cashPaid >= totals.total) {
                const change = cashPaid - totals.total;
                changeAmount.textContent = formatRupiah(change);
                changeRow.style.display = 'flex';
                updateCheckoutButton();
            } else {
                changeRow.style.display = 'none';
                updateCheckoutButton();
            }
        });

        // CHECKOUT & SAVE TRANSACTION
        const checkout = () => {
            if (cart.length === 0) return;
            const totals = updateTotals();
            const now = new Date();
            const transactionId = generateTransactionId();
            
            // Save transaction
            const transaction = {
                id: transactionId,
                timestamp: now.toISOString(),
                items: [...cart],
                subtotal: totals.subtotal,
                tax: totals.tax,
                discount: totals.discount,
                total: totals.total,
                paymentMethod: selectedPaymentMethod,
                cashPaid: selectedPaymentMethod === 'cash' ? cashPaid : 0,
                change: selectedPaymentMethod === 'cash' ? (cashPaid - totals.total) : 0
            };
            transactions.push(transaction);
            saveTransactions();
            
            // Show receipt
            receiptDateTime.textContent = now.toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            receiptItems.innerHTML = '';
            cart.forEach(item => {
                const el = document.createElement('div');
                el.className = 'receipt-item';
                el.innerHTML = `<span><span class="receipt-item-name">${item.name}</span><span class="receipt-item-qty">x${item.quantity}</span></span><span class="receipt-item-price">${formatRupiah(item.price * item.quantity)}</span>`;
                receiptItems.appendChild(el);
            });
            receiptSubtotal.textContent = formatRupiah(totals.subtotal);
            receiptTax.textContent = formatRupiah(totals.tax);
            receiptDiscount.textContent = formatRupiah(totals.discount);
            receiptTotal.textContent = formatRupiah(totals.total);
            receiptPaymentMethod.textContent = selectedPaymentMethod.charAt(0).toUpperCase() + selectedPaymentMethod.slice(1);
            
            // Cash details in receipt
            if (selectedPaymentMethod === 'cash') {
                receiptCashDetails.style.display = 'block';
                receiptCashPaid.textContent = formatRupiah(cashPaid);
                receiptChange.textContent = formatRupiah(cashPaid - totals.total);
            } else {
                receiptCashDetails.style.display = 'none';
            }
            
            receiptModal.classList.add('active');
            setTimeout(() => window.print(), 400);
            
            setTimeout(() => {
                cart = []; saveCart(); renderCart();
                resetCashInput();
            }, 2500);
        };

        // GENERATE REPORT
        const generateReport = () => {
            const period = reportPeriod.value;
            const now = new Date();
            let filteredTransactions = [];
            
            const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const startOfYesterday = new Date(startOfDay);
            startOfYesterday.setDate(startOfYesterday.getDate() - 1);
            const startOfWeek = new Date(startOfDay);
            startOfWeek.setDate(startOfWeek.getDate() - 7);
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            
            switch(period) {
                case 'today':
                    filteredTransactions = transactions.filter(t => new Date(t.timestamp) >= startOfDay);
                    break;
                case 'yesterday':
                    filteredTransactions = transactions.filter(t => {
                        const tDate = new Date(t.timestamp);
                        return tDate >= startOfYesterday && tDate < startOfDay;
                    });
                    break;
                case 'week':
                    filteredTransactions = transactions.filter(t => new Date(t.timestamp) >= startOfWeek);
                    break;
                case 'month':
                    filteredTransactions = transactions.filter(t => new Date(t.timestamp) >= startOfMonth);
                    break;
                case 'all':
                default:
                    filteredTransactions = [...transactions];
                    break;
            }
            
            // Calculate statistics
            const totalRevenue = filteredTransactions.reduce((sum, t) => sum + t.total, 0);
            const totalOrders = filteredTransactions.length;
            const totalItems = filteredTransactions.reduce((sum, t) => sum + t.items.reduce((s, i) => s + i.quantity, 0), 0);
            const avgTransaction = totalOrders > 0 ? totalRevenue / totalOrders : 0;
            
            // Update stats
            document.getElementById('totalRevenue').textContent = formatRupiah(totalRevenue);
            document.getElementById('totalOrders').textContent = totalOrders;
            document.getElementById('totalItems').textContent = totalItems;
            document.getElementById('avgTransaction').textContent = formatRupiah(avgTransaction);
            
            // Render transactions list
            const transactionsList = document.getElementById('transactionsList');
            if (filteredTransactions.length === 0) {
                transactionsList.innerHTML = `
                    <div class="empty-report">
                        <i class="fas fa-inbox"></i>
                        <h3>Tidak Ada Transaksi</h3>
                        <p>Belum ada transaksi pada periode yang dipilih</p>
                    </div>`;
            } else {
                // Sort by newest first
                filteredTransactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                
                let tableHTML = `
                    <table class="transactions-table">
                        <thead>
                            <tr>
                                <th>ID Transaksi</th>
                                <th>Waktu</th>
                                <th>Item</th>
                                <th>Total</th>
                                <th>Pembayaran</th>
                            </tr>
                        </thead>
                        <tbody>`;
                
                filteredTransactions.forEach(trx => {
                    const date = new Date(trx.timestamp);
                    const timeStr = date.toLocaleString('id-ID', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
                    const itemCount = trx.items.reduce((sum, i) => sum + i.quantity, 0);
                    
                    tableHTML += `
                        <tr>
                            <td class="transaction-id">${trx.id}</td>
                            <td>${timeStr}</td>
                            <td>${itemCount} item</td>
                            <td><strong>${formatRupiah(trx.total)}</strong></td>
                            <td><span class="payment-badge ${trx.paymentMethod}">${trx.paymentMethod.toUpperCase()}</span></td>
                        </tr>`;
                });
                
                tableHTML += `</tbody></table>`;
                transactionsList.innerHTML = tableHTML;
            }
        };

        // Export to CSV
        const exportToCSV = () => {
            if (transactions.length === 0) {
                alert('Tidak ada data untuk diekspor!');
                return;
            }
            
            let csv = 'ID Transaksi,Tanggal,Waktu,Item,Subtotal,Pajak,Diskon,Total,Metode Pembayaran,Uang Diterima,Kembalian\n';
            
            transactions.forEach(trx => {
                const date = new Date(trx.timestamp);
                const dateStr = date.toLocaleDateString('id-ID');
                const timeStr = date.toLocaleTimeString('id-ID');
                const items = trx.items.map(i => `${i.name} (${i.quantity})`).join('; ');
                
                csv += `${trx.id},${dateStr},${timeStr},"${items}",${trx.subtotal},${trx.tax},${trx.discount},${trx.total},${trx.paymentMethod},${trx.cashPaid || 0},${trx.change || 0}\n`;
            });
            
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `Laporan_Thai_Tea_CST_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // Clear all data
        const clearAllData = () => {
            if (transactions.length === 0) {
                alert('Tidak ada data untuk dihapus!');
                return;
            }
            
            if (confirm(`⚠️ PERINGATAN!\n\nAnda akan menghapus ${transactions.length} transaksi.\nTindakan ini tidak dapat dibatalkan.\n\nYakin ingin melanjutkan?`)) {
                if (confirm('Konfirmasi terakhir: Hapus SEMUA data transaksi?')) {
                    transactions = [];
                    saveTransactions();
                    generateReport();
                    alert('Semua data transaksi telah dihapus.');
                }
            }
        };

        const printReceipt = () => window.print();

        const init = () => {
            renderProducts(); renderCart();
            
            categoryBtns.forEach(btn => btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProducts(btn.dataset.category);
            }));
            
            paymentMethods.forEach(method => method.addEventListener('click', () => {
                paymentMethods.forEach(m => m.classList.remove('selected'));
                method.classList.add('selected');
                selectedPaymentMethod = method.dataset.method;
                
                // Show/Hide Cash Input
                if (selectedPaymentMethod === 'cash') {
                    cashPaymentSection.style.display = 'block';
                    cashInput.focus();
                } else {
                    cashPaymentSection.style.display = 'none';
                    resetCashInput();
                }
                updateCheckoutButton();
            }));
            
            checkoutBtn.addEventListener('click', checkout);
            clearCartBtn.addEventListener('click', clearCart);
            closeReceiptModal.addEventListener('click', () => receiptModal.classList.remove('active'));
            closeReportModal.addEventListener('click', () => reportModal.classList.remove('active'));
            printReceiptBtn.addEventListener('click', printReceipt);
            newOrderFromReceiptBtn.addEventListener('click', () => { receiptModal.classList.remove('active'); renderProducts(); });
            newOrderBtn.addEventListener('click', () => {
                if (cart.length > 0 && !confirm('Keranjang masih berisi item. Lanjutkan order baru?')) return;
                cart = []; saveCart(); renderCart(); renderProducts();
                resetCashInput();
            });
            
            // Report functionality
            viewReportBtn.addEventListener('click', () => {
                generateReport();
                reportModal.classList.add('active');
            });
            reportPeriod.addEventListener('change', generateReport);
            generateReportBtn.addEventListener('click', generateReport);
            exportReportBtn.addEventListener('click', exportToCSV);
            clearAllDataBtn.addEventListener('click', clearAllData);
            printReportBtn.addEventListener('click', () => {
                alert('Fitur cetak laporan akan membuka dialog print browser. Untuk hasil terbaik, gunakan export CSV.');
                window.print();
            });
            
            receiptModal.addEventListener('click', e => { if (e.target === receiptModal) receiptModal.classList.remove('active'); });
            reportModal.addEventListener('click', e => { if (e.target === reportModal) reportModal.classList.remove('active'); });
            
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    if (receiptModal.classList.contains('active')) receiptModal.classList.remove('active');
                    if (reportModal.classList.contains('active')) reportModal.classList.remove('active');
                }
                if (e.ctrlKey && e.key === 'p') {
                    e.preventDefault();
                    if (receiptModal.classList.contains('active')) printReceipt();
                }
            });
        };

        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
